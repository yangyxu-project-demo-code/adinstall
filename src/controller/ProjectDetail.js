zn.define(function (){

    return zn.Controller('projectdetail', {
        methods: {
            getBaseInfo: {
                method: 'POST',
                argv: {
                    zn_id: null
                },
                value: function (request, response, chain){
                    var _zn_id = request.getValue('zn_id');
                    this.beginTransaction()
                        .query('select project item', function (sql, data) {
                            return zn.sql.select({
                                table: 'zn_adinstall_project',
                                fields: '*',
                                where: { zn_id: _zn_id }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(data[0]);
                            }
                        })
                        .commit();
                }
            },
            getRegions: {
                method: 'POST',
                argv: {
                    zn_id: null
                },
                value: function (request, response, chain){
                    var _zn_id = request.getValue('zn_id');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project',
                            fields: 'id',
                            where: { zn_id: _zn_id }
                        }))
                        .query('select project item', function (sql, data) {
                            if(!data[0]){
                                return response.error('该项目不存在'), false;
                            }
                            return zn.sql.paging({
                                table: 'zn_adinstall_project_region',
                                fields: [
                                    'id, zn_id, zn_create_time, status, region, start_time, end_time, task_count, task_resolved_count, task_finished_count, attachments, comment',
                                    'adinstall_convert_brand(brand_id) as brand_id_convert',
                                    'zn_plugin_admin_convert_var(region) as region_convert',
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert'
                                ],
                                where: { project_id: data[0].id }
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
            getTasks: {
                method: 'POST',
                argv: {
                    zn_id: null
                },
                value: function (request, response, chain){
                    var _zn_id = request.getValue('zn_id');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project',
                            fields: 'id',
                            where: { zn_id: _zn_id }
                        }))
                        .query('select project item', function (sql, data) {
                            if(!data[0]){
                                return response.error('该项目不存在'), false;
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
                                where: { project_id: data[0].id }
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
            }
        }
    });

});
