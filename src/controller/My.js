zn.define(function (){

    return zn.Controller('my', {
        methods: {
            brands: {
                method: 'GET',
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT BRAND:', function (){
                            return zn.sql.select({
                                table: 'zn_adinstall_brand',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_var(type) as type_convert',
                                    'zn_plugin_admin_convert_var(status) as status_convert',
                                    'zn_plugin_admin_convert_var(level) as level_convert',
                                    'zn_plugin_admin_convert_var(province) as province_convert',
                                    'zn_plugin_admin_convert_var(city) as city_convert'
                                ],
                                where: {
                                    zn_rights_owner_id: _sid
                                }
                            }) + zn.sql.select({
                                table: 'zn_plugin_admin_var',
                                fields: 'id, zn_title',
                                where: {zn_tree_pid: 635}
                            }) + zn.sql.select({
                                table: 'zn_plugin_admin_var',
                                fields: 'id, zn_title',
                                where: {zn_tree_pid: 636}
                            }) + zn.sql.select({
                                table: 'zn_plugin_admin_var',
                                fields: 'id, zn_title',
                                where: {zn_tree_pid: 637}
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
            suppliers: {
                method: 'GET',
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id'),
                        _provinces = [];
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query("select var2.id as value, var2.zn_title as text, var1.id as region_id, var1.zn_title as region_id_convert from zn_plugin_admin_var as var1 right join zn_plugin_admin_var as var2 on var1.id = var2.zn_tree_pid where var1.zn_tree_pid = 44 and var1.zn_rights_owner_id = {0} and var2.zn_deleted=0;".format(_sid))
                        .query('SELECT MY REGION:', function (sql, data){
                            _provinces = data;
                            if(!_provinces.length){
                                return response.error('您暂时没有管辖供应商'), false;
                            }
                            var _temp = _provinces.map(function (province){
                                return province.value;
                            });
                            return zn.sql.select({
                                table: 'zn_adinstall_supplier',
                                fields: '*, zn_plugin_admin_convert_var(province) as province_convert, zn_plugin_admin_convert_var(city) as city_convert',
                                where: "locate(concat(',', province, ','), ',"+_temp.join(',')+",')<>0"
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                response.success({
                                    provinces: _provinces,
                                    suppliers: data
                                });
                            }
                        })
                        .commit();
                }
            },
            getOwnProjects: {
                method: 'GET/POST',
                argv: {
                    status: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id'),
                        _status = request.getValue('status');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project',
                                fields: '*, zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert, zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert, adinstall_convert_brand(brand_id) as brand_id_convert',
                                where: [
                                    'zn_create_user=' + _sid,
                                    //'(zn_create_user=' + _sid + " or "+ zn.sql.rights(_sid) + ')',
                                    _status==100?'':' and status=' + _status
                                ],
                                order: {
                                    zn_create_time: 'desc'
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
            getAuditProjects: {
                method: 'GET/POST',
                argv: {
                    status: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id'),
                        _status = request.getInt('status');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_region',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                ],
                                where: [
                                    'zn_deleted = 0  and zn_create_user = '+_sid,
                                    _status==100?'':' and status=' + _status
                                ],
                                order: {
                                    zn_create_time: 'desc'
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
            getOwnProjectRegions: {
                method: 'GET/POST',
                argv: {
                    status: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id'),
                        _status = request.getInt('status');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_region',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert'
                                ],
                                where: [
                                    'zn_deleted = 0 and zn_rights_owner_id = '+_sid,
                                    _status==100?'':' and status=' + _status
                                ],
                                order: {
                                    zn_create_time: 'desc'
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
            getProjectTasks: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_item',
                                fields: [
                                    '*',
                                    'adinstall_convert_supplier_openid(supplier_openid) as supplier_openid_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                    'adinstall_convert_brand_shop_title(brand_shop_id) as brand_shop_title_convert',
                                    'adinstall_convert_brand_shop_address(brand_shop_id) as brand_shop_address_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                                ],
                                where: 'zn_rights_owner_id='+_sid +" or "+ zn.sql.rights(_sid),
                                order: {
                                    zn_create_time: 'desc'
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
            getCreatedProjectTasks: {
                method: 'GET/POST',
                argv: {
                    status: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id'),
                        _status = request.getValue('status');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_item',
                                fields: [
                                    '*',
                                    'adinstall_convert_supplier_openid(supplier_openid) as supplier_openid_convert',
                                    'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                    'adinstall_convert_brand_shop_title(brand_shop_id) as brand_shop_title_convert',
                                    'adinstall_convert_brand_shop_address(brand_shop_id) as brand_shop_address_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                    'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                                ],
                                where: [
                                    'zn_deleted=0 and zn_create_user='+_sid,
                                    _status==100?'':' and status='+_status
                                ],
                                order: {
                                    zn_create_time: 'desc'
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
            getOwnProjectTasks: {
                method: 'GET/POST',
                argv: {
                    status: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id'),
                        _status = request.getValue('status');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_item',
                                fields: [
                                    '*',
                                    'adinstall_convert_supplier_openid(supplier_openid) as supplier_openid_convert',
                                    'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                    'adinstall_convert_brand_shop_title(brand_shop_id) as brand_shop_title_convert',
                                    'adinstall_convert_brand_shop_address(brand_shop_id) as brand_shop_address_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                    'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                                ],
                                where: [
                                    'zn_deleted=0 and zn_rights_owner_id='+_sid,
                                    _status==100?'':' and status='+_status
                                ],
                                order: {
                                    zn_create_time: 'desc'
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
            getRegionProjects: {
                method: 'GET/POST',
                argv: {
                    status: null
                },
                value: function (request, response, chain){
                    var _sid = request.getSessionValueByKey('id');
                    if(!!!_sid){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.beginTransaction()
                        .query('SELECT MY REGION:', function (sql, data){
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_region',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                ],
                                where: 'zn_rights_owner_id=' + _sid + " and status=" + request.getValue('status'),
                                order: {
                                    zn_create_time: 'desc'
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
            }
        }
    });

});
