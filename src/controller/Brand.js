zn.define(function (){

    return zn.Controller('brand', {
        methods: {
            getAllProjects: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _status = request.getValue('status');

                    this.beginTransaction()
                        .query('select brand shops', function (sql, data) {
                            return zn.sql.paging({
                                table: 'zn_adinstall_project',
                                fields: [
                                    '*',
                                    'adinstall_convert_brand(brand_id) as brand_convert',
                                    'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert'
                                ],
                                where: _status==100?{}:{ status: _status },
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
            getAllTasks: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _status = request.getValue('status');

                    this.beginTransaction()
                        .query('select brand project items', function (sql, data) {
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
                                where: _status==100?{}:{ status: _status },
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
            getBrands: {
                method: 'GET',
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query('select brand', function (sql, data) {
                            return zn.sql.select({
                                table: 'zn_adinstall_brand',
                                fields: 'zn_title, logo'
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
            getShops: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('品牌不存在'), false;
                            }

                            return zn.sql.paging({
                                table: 'zn_adinstall_brand_shop',
                                fields: '*',
                                where: {
                                    brand_id: data[0].id
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
            getProjects: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('品牌不存在'), false;
                            }

                            return zn.sql.paging({
                                table: 'zn_adinstall_project',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert'
                                ],
                                where: {
                                    brand_id: data[0].id
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
            getTasks: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('品牌不存在'), false;
                            }

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
                                where: {
                                    brand_id: data[0].id
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
            gets: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('品牌不存在'), false;
                            }

                            return zn.sql.paging({
                                table: 'zn_adinstall_project_item',
                                fields: [
                                    '*',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                    'adinstall_convert_brand_shop_title(brand_shop_id) as brand_shop_title_convert',
                                    'adinstall_convert_brand_shop_address(brand_shop_id) as brand_shop_address_convert',
                                    'adinstall_convert_project(project_id) as project_id_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                                ],
                                where: {
                                    brand_id: data[0].id
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
            getCreateProjectMeta: {
                method: 'POST',
                argv: {
                    brandCode: null
                },
                value: function (request, response, chain){
                    var _brandCode = request.getValue('brandCode'),
                        _data = [];
                    this.beginTransaction()
                        .query('select project and region', function (){
                            return zn.sql.select({
                                table: 'zn_adinstall_brand',
                                where: { type_code: _brandCode }
                            }) + zn.sql.select({
                                table: 'zn_plugin_admin_var',
                                fields: 'id, zn_title, zn_rights_owner_id, zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                where: { zn_tree_pid: 44 }
                            });
                        })
                        .query('select brand shop', function (sql, data) {
                            _data = data;
                            if(!data[0][0]){
                                return response.error('未查到该品牌'), false;
                            }
                            return zn.sql.select({
                                table: 'zn_adinstall_brand_shop',
                                fields: "id, zn_title, address, region, contact, phone, telephone, logo",
                                where: {
                                    brand_id: data[0][0].id,
                                    zn_deleted: 0,
                                    status: 0
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                _data.push(data);
                                response.success(_data);
                            }
                        })
                        .commit();
                }
            },
            createProject: {
                method: 'POST',
                argv: {
                    meta: null,
                    regions: null
                },
                value: function (request, response, chain){
                    var _meta = request.getValue('meta'),
                        _regions = request.getValue('regions');
                    this.beginTransaction()
                        .query('create project', function (){
                            return zn.sql.insert({
                                table: 'zn_adinstall_project',
                                values: _meta
                            });
                        })
                        .query('create project region', function (sql, data) {
                            var _projectId = data.insertId,
                                _sqls = [];
                            _regions.forEach(function (region){
                                region.project_id = _projectId;
                                _sqls.push(zn.sql.insert({
                                    table: 'zn_adinstall_project_region',
                                    values: region
                                }));
                            });

                            return _sqls.join('');
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success();
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
