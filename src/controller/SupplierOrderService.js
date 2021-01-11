zn.define(function (){

    return zn.Controller('supplier_order_service', {
        methods: {
            pagingOrder: {
                method: 'GET/POST',
                argv: {
                    openid: null,
                    status: null
                },
                value: function (request, response, chain){
                    var _openid = request.getValue('openid'),
                        _status = request.getValue('status');

                    this.beginTransaction()
                        .query('select: ', function (sql, data){
                            var _wheres = [
                                "zn_deleted = 0 and supplier_openid = '"+_openid+"'"
                            ];
                            if(_status==100){
                                _wheres.push(' and status>3');
                            }else {
                                _wheres.push(' and status='+_status)
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
                                    'zn_plugin_admin_convert_user(owner) as owner_convert',
                                    'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                    'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                                ],
                                where: _wheres
                            });
                        }, function (err, data){
                            if(err){
                                response.error('查询失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            accept: {
                method: 'GET/POST',
                argv: {
                    openid: null,
                    orderCode: null
                },
                value: function (request, response, chain){
                    var _openid = request.getValue('openid'),
                        _orderCode = request.getValue('orderCode');
                    var _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            where: {
                                code: _orderCode,
                                supplier_openid: _openid
                            }
                        }))
                        .query('accept ', function (sql, data){
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }

                            if(_order.status==2){
                                return response.error('订单已经接单, 请勿重复操作'), false;
                            }

                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 2
                                },
                                where: {
                                    code: _orderCode,
                                    supplier_openid: _openid
                                }
                            });

                        }, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            reject: {
                method: 'GET/POST',
                argv: {
                    openid: null,
                    orderCode: null
                },
                value: function (request, response, chain){
                    var _openid = request.getValue('openid'),
                        _orderCode = request.getValue('orderCode');
                    var _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            where: {
                                code: _orderCode,
                                supplier_openid: _openid
                            }
                        }))
                        .query('accept ', function (sql, data){
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }

                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: "status=1, supplier_openid='', suppliers=concat(suppliers, ',', supplier_openid, ',')",
                                where: {
                                    code: _orderCode,
                                    supplier_openid: _openid
                                }
                            });

                        }, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            signIn: {
                method: 'GET/POST',
                argv: {
                    orderCode: null,
                    address: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode'),
                        _address = request.getValue('address');
                    var _order = null;
                    this.beginTransaction()
                        .query(zn.sql.update({
                            table: 'zn_adinstall_project_item',
                            updates: "sign_in_time=now(), sign_in_address='"+_address+"'",
                            where: {
                                code: _orderCode
                            }
                        }), null, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            doSign: {
                method: 'GET/POST',
                argv: {
                    orderCode: null,
                    data: null,
                    openid: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode'),
                        _data = request.getValue('data'),
                        _openid = request.getValue('openid'),
                        _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            where: {
                                code: _orderCode
                            }
                        }))
                        .query('accept ', function (sql, data){
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }

                            if(_order.signature){
                                return response.error('已签名请无重复提交'), false;
                            }

                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 4,
                                    signature: _data,
                                    signature_openid: _openid,
                                    signature_time: "{{now()}}"
                                },
                                where: {
                                    code: _orderCode
                                }
                            });

                        }, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            saveImages: {
                method: 'GET/POST',
                argv: {
                    data: null,
                    orderCode: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode'),
                        _data = request.getValue('data');
                    var _order = null;
                    this.beginTransaction()
                        .query(zn.sql.update({
                            table: 'zn_adinstall_project_item',
                            updates: _data,
                            where: {
                                code: _orderCode
                            }
                        }), null, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            submit: {
                method: 'GET/POST',
                argv: {
                    orderCode: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode');
                    this.beginTransaction()
                        .query(zn.sql.update({
                            table: 'zn_adinstall_project_item',
                            updates: {
                                status: 3
                            },
                            where: {
                                code: _orderCode
                            }
                        }), null, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                            }
                        }).commit();
                }
            },
            orderInfo: {
                method: 'GET/POST',
                argv: {
                    orderCode: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode');
                    var _order = {};
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'adinstall_convert_brand(brand_id) as brand_id_convert',
                                'adinstall_convert_brand_logo(brand_id) as brand_logo_convert',
                                'adinstall_convert_brand_shop_title(brand_shop_id) as brand_shop_title_convert',
                                'adinstall_convert_brand_shop_address(brand_shop_id) as brand_shop_address_convert',
                                'adinstall_convert_project(project_id) as project_id_convert',
                                'zn_plugin_wechat_convert_openid(signature_openid) as signature_openid_convert',
                                'zn_plugin_admin_convert_user(owner) as owner_convert',
                                'zn_plugin_admin_convert_user(zn_rights_owner_id) as zn_rights_owner_id_convert',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert'
                            ],
                            where: {
                                code: _orderCode
                            }
                        }))
                        .query('select orderinfo: ', function (sql, data){
                            if(!data.length){
                                return response.error('未查到该订单'), false;
                            }
                            _order = data[0];
                            return zn.sql.select({
                                table: 'zn_adinstall_brand_shop',
                                where: {
                                    id: _order.brand_shop_id
                                }
                            }) + zn.sql.select({
                                table: 'zn_adinstall_brand_shop_frame',
                                where: "id in (0"+_order.brand_shop_frame_ids+"0)"
                            });
                        }, function (err, data){
                            _order.brandshop = data[0][0];
                            _order.brandshopframes = data[1];
                            if(err){
                                response.error('查询失败：'+ err.message);
                            }else {
                                response.success(_order);
                            }
                        }).commit();
                }
            }
        }
    });

});
