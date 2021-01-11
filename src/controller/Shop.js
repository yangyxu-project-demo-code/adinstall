zn.define(function (){

    return zn.Controller('shop', {
        methods: {
            getAdvs: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand_shop',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('门店不存在'), false;
                            }

                            return zn.sql.paging({
                                table: 'zn_adinstall_brand_shop_frame',
                                fields: [
                                    '*',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert'
                                ],
                                where: {
                                    brand_shop_id: data[0].id
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
                            table: 'zn_adinstall_brand_shop',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('门店不存在'), false;
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
                                    brand_shop_id: data[0].id
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
            getStaffs: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand_shop',
                            fields: 'id',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('品牌不存在'), false;
                            }

                            return zn.sql.paging({
                                table: 'zn_adinstall_brand_shop_staff',
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
            }
        }
    });

});
