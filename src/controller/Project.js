zn.define(function (){

    return zn.Controller('project', {
        methods: {
            removeProject: {
                method: 'POST',
                argv: {
                    project_znid: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    var _project = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project',
                            where: {
                                zn_create_user: _sid,
                                zn_id: request.getValue('project_znid')
                            }
                        }))
                        .query('select project', function (sql, data){
                            _project = data[0];
                            if(!_project){
                                return response.error('您无权限删除改项目'), false;
                            }
                            return zn.sql.select({
                                table: 'zn_adinstall_project_item',
                                fields: 'count(id) as count',
                                where: {
                                    project_id: data[0].id
                                }
                            });
                        })
                        .query('remove project', function (sql, data){
                            if(data[0] && data[0].count){
                                return response.error('该项目已经有工单在运作, 不允许删除'), false;
                            }
                            return zn.sql.delete({
                                table: 'zn_adinstall_project',
                                where: {
                                    id: _project.id
                                }
                            }) + zn.sql.delete({
                                table: 'zn_adinstall_project_region',
                                where: {
                                    project_id: _project.id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(data);
                            }
                        })
                        .commit();
                }
            },
            getCreateProjectTaskMeta: {
                method: 'POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    var _znid = request.getValue('znid'),
                        _data = {};

                    this.beginTransaction()
                        .query('select project and region', function (){
                            return zn.sql.select({
                                table: 'zn_adinstall_project_region',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'zn_plugin_admin_convert_var(status) as status_convert'
                                ],
                                where: { zn_id: _znid }
                            });
                        })
                        .query('select brand shop', function (sql, data) {
                            if(!data[0]){
                                return response.error('未查到该项目'), false;
                            }
                            _data.region_project = data[0];
                            return zn.sql.select({
                                table: 'zn_adinstall_brand_shop',
                                fields: "id as value, CONCAT(zn_title, '【', address, '】' ) as text, zn_title, address, region, province, city",
                                where: "locate(concat(',', id, ','), '"+_data.region_project.brand_shop_ids+"')<>0"
                            }) + zn.sql.select({
                                table: 'zn_plugin_admin_var',
                                fields: 'id, zn_title',
                                where: { zn_tree_pid: _data.region_project.region }
                            }) + zn.sql.select({
                                table: 'zn_adinstall_project',
                                fields: [
                                    '*',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_var(status) as status_convert'
                                ],
                                where: {
                                    id: _data.region_project.project_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                _data.shops = data[0];
                                _data.provinces = data[1];
                                _data.project = data[2][0];
                                response.success(_data);
                            }
                        })
                        .commit();
                }
            },
            createProjectTasks: {
                method: 'POST',
                argv: {
                    meta: null,
                    tasks: null
                },
                value: function (request, response, chain){
                    var _tasks = request.getValue('tasks'),
                        _meta = request.getValue('meta'),
                        _shop_frame_sql = [],
                        _review_sql = [];
                    this.beginTransaction()
                        .query('create project region task', function (sql, data) {
                            var _sqls = [];
                            _tasks.forEach(function (task, index){
                                task = zn.extend(task, _meta);
                                task.status = 0;
                                task.zn_id = zn.uuid();
                                task.code = [zn.date.nowDateString(), zn.util.randomNumbers(6)].join('');
                                _sqls.push(zn.sql.insert({
                                    table: 'zn_adinstall_project_item',
                                    values: task
                                }));
                                _review_sql.push(zn.sql.insert({
                                    table: 'zn_adinstall_project_item_review',
                                    values: {
                                        type: '区域监理创建工单',
                                        status: '等待项目经理审核',
                                        project_id: task.project_id,
                                        project_item_id: ("{"+index+"}"),
                                        brand_id: task.brand_id,
                                        brand_shop_id: task.brand_shop_id
                                    }
                                }));

                                task.brand_shop_frame_ids.split(',').forEach(function (shop_frame_id){
                                    if(shop_frame_id){
                                        _shop_frame_sql.push(zn.sql.insert({
                                            table: 'zn_adinstall_project_item_shop_frame',
                                            values: {
                                                project_id: task.project_id,
                                                project_item_id: ("{"+index+"}"),
                                                brand_id: task.brand_id,
                                                brand_shop_id: task.brand_shop_id,
                                                brand_shop_frame_id: +shop_frame_id
                                            }
                                        }));
                                    }
                                });
                            });


                            return _sqls.join('') + zn.sql.update({
                                table: 'zn_adinstall_project_region',
                                updates: 'task_count=task_count+'+_tasks.length,
                                where: { id: _meta.project_region_id }
                            });
                        })
                        .query("insert shop frame", function (sql, data){
                            var _ids = data.map(function (item){
                                return (item.insertId||0).toString();
                            });

                            return _shop_frame_sql.join('').format(_ids) + _review_sql.join('').format(_ids);
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success('创建成功');
                            }
                        })
                        .commit();
                }
            },
            getTasks: {
                method: 'POST',
                argv: {
                    region_project_id: null
                },
                value: function (request, response, chain){
                    var _region_project_id = request.getValue('region_project_id'),
                        _shop_id = request.getValue('shop_id');
                    this.beginTransaction()
                        .query('select project item', function (sql, data) {
                            return zn.sql.select({
                                table: 'zn_adinstall_project_item',
                                fields: [
                                    '*',
                                    'adinstall_convert_supplier_openid(supplier_openid) as supplier_openid_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                    'adinstall_convert_brand_shop_title(brand_shop_id) as brand_shop_title_convert',
                                    'adinstall_convert_brand_shop_address(brand_shop_id) as brand_shop_address_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                    'zn_plugin_wechat_convert_openid(signature_openid) as signature_openid_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                                ],
                                where: { project_region_id: _region_project_id, brand_shop_id: _shop_id }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(data);
                            }
                        })
                        .commit();
                }
            },
            deleteTask: {
                method: 'POST',
                argv: {
                    taskCode: null
                },
                value: function (request, response, chain){
                    var _taskCode = request.getValue('taskCode');
                    var _sid = request.getSessionValueByKey('id');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            where: { code: _taskCode, zn_create_user: _sid }
                        }))
                        .query('delete task', function (sql, data) {
                            if(data[0]){
                                return zn.sql.delete({
                                    table: 'zn_adinstall_project_item',
                                    where: { code: _taskCode }
                                }) + zn.sql.update({
                                    table: 'zn_adinstall_project_region',
                                    updates: 'task_count=task_count-1',
                                    where: { id: data[0].project_region_id }
                                });
                            }else {
                                return response.error('您暂无权限删除'), false;
                            }
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(data);
                            }
                        })
                        .commit();
                }
            },
            getProjectInfo: {
                method: 'POST/GET',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    var _znid = request.getValue('znid'),
                        _data = {};
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project',
                            fields: '*, adinstall_convert_brand(brand_id) as brand_id_convert',
                            where: { zn_id: _znid }
                        }))
                        .query('select project region', function (sql, data) {
                            if(data[0]){
                                _data.project = data[0];
                                return zn.sql.select({
                                    table: 'zn_adinstall_project_region',
                                    fields: [
                                        '*',
                                        'zn_plugin_admin_convert_var(region) as region_convert',
                                        'zn_plugin_admin_convert_var(status) as status_convert'
                                    ],
                                    where: { project_id: data[0].id }
                                });
                            }else {
                                return response.error('未查到项目'), false;
                            }
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                _data.regions = data;
                                response.success(_data);
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
