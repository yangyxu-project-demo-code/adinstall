zn.define(function (){

    var node_xlsx = require('xlsx');

    return zn.Controller('supplier', {
        methods: {
            getSuggestions: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_supplier',
                            fields: 'openid',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('供应商不存在'), false;
                            }
                            return zn.sql.paging({
                                table: 'zn_adinstall_supplier_suggestion',
                                fields: [
                                    '*'
                                ],
                                where: {
                                    supplier_openid: data[0].openid
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
            getComments: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_supplier',
                            fields: 'openid',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('供应商不存在'), false;
                            }
                            return zn.sql.paging({
                                table: 'zn_adinstall_supplier_comment',
                                fields: [
                                    '*'
                                ],
                                where: {
                                    supplier_openid: data[0].openid
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
            getMessages: {
                method: 'GET/POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_supplier',
                            fields: 'openid',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('供应商不存在'), false;
                            }
                            return zn.sql.paging({
                                table: 'zn_adinstall_supplier_message',
                                fields: [
                                    '*'
                                ],
                                where: {
                                    openid: data[0].openid
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
                            table: 'zn_adinstall_supplier',
                            fields: 'openid',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('select brand shops', function (sql, data) {
                            if(!data[0]){
                                return response.error('供应商不存在'), false;
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
                                    supplier_openid: data[0].openid
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
            getByOpenId: {
                method: 'GET/POST',
                argv: {

                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query('select ', function (sql, data){
                            return zn.sql.select({
                                table: 'zn_adinstall_supplier',
                                fields: [
                                    'level, rank, type, province, city, supplier_type, address, name, phone, telephone, qq, wechat, email, work_types, work_age, work_fee, age, sex',
                                    'company_title, company_legal_person, company_tax_id, company_main_business, card_id, card_attachments, bank_card_title, bank_card_name, bank_card_id, bank_card_attachments',
                                    'zn_plugin_admin_convert_vars(work_types) as work_types_convert',
                                    'zn_plugin_admin_convert_var(province) as province_convert',
                                    'zn_plugin_admin_convert_var(city) as city_convert',
                                ],
                                where: request.getValue()
                            })
                        }, function (err, data){
                            if(err){
                                response.error('获取失败：'+ err.message);
                            }else {
                                if(data[0]){
                                    response.success(data[0]);
                                }else {
                                    response.error('为查找用户信息');
                                }
                            }
                        }).commit();
                }
            },
            updateByOpenId: {
                method: 'GET/POST',
                argv: {
                    openid: null,
                    data: null
                },
                value: function (request, response, chain){
                    var _openid = request.getValue('openid');

                    this.beginTransaction()
                        .query('select ', function (sql, data){
                            return zn.sql.update({
                                table: 'zn_adinstall_supplier',
                                updates: request.getValue('data'),
                                where: {
                                    openid: _openid
                                }
                            })
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success('更新成功');
                            }
                        }).commit();
                }
            },
            auth: {
                method: 'GET/POST',
                argv: {
                    openid: null,
                    phone: null,
                    code: null
                },
                value: function (request, response, chain){
                    var _openid = request.getValue('openid'),
                        _phone = request.getValue('phone'),
                        _code = request.getValue('code');

                    this.beginTransaction()
                        .query('Checking: ', function (){
                            return zn.sql.select({
                                table: 'zn_adinstall_user_sms',
                                where: {
                                    checked: 0,
                                    phone: _phone,
                                    code: _code
                                }
                            }) + zn.sql.select({
                                table: 'zn_adinstall_supplier',
                                where: {
                                    phone: _phone
                                }
                            }) + zn.sql.select({
                                table: 'zn_adinstall_user',
                                where: {
                                    openid: _openid
                                }
                            });
                        })
                        .query('Updating: ', function (sql, data){
                            var _sms = data[0][0],
                                _supplier = data[1][0],
                                _user = data[2][0];
                            if(!_sms){
                                return response.error('手机号或验证码错误'), false;
                            }
                            if(!_supplier){
                                return response.error('您暂时不是我们内部供应商'), false;
                            }
                            var _sql = zn.sql.update({
                                table: 'zn_adinstall_user_sms',
                                updates: {checked: 1},
                                where: {id: _sms.id}
                            }) + zn.sql.update({
                                table: 'zn_adinstall_supplier',
                                updates: { openid: _openid, status: 1 },
                                where: {id: _supplier.id}
                            });
                            if(!_user){
                                _sql += zn.sql.insert({
                                    table: 'zn_adinstall_user',
                                    values: {
                                        openid: _openid,
                                        role: 'zn_adinstall_supplier'
                                    }
                                });
                            }

                            return _sql;
                        }, function (err, data){
                            if(err){
                                response.error('认证失败：'+ err.message);
                            }else {
                                response.success('认证成功');
                            }
                        }).commit();
                }
            },
            importSystemSupplier: {
                method: 'GET/POST',
                argv: {
                    start: 1
                },
                value: function (request, response, chain){
                    var _files = request.$files,
                        _result = [],
                        _start = request.getInt('start') || 2;


                    this.beginTransaction()
                        .query('Select var: ', function (){
                            return "select id as value, zn_title as text from zn_plugin_admin_var where zn_deleted=0 and locate(',44,', zn_tree_parent_path)<>0;"
                        })
                        .query('Insert sqls: ', function (sql, data){
                            var _keys = {}, _sqls = [];
                            data.forEach(function (_var){
                                _keys[_var.text.trim()] = _var.value;
                            });

                            var _lastProv = null, _lastCity = null, _lastLevel = null;
                            zn.each(_files, function (file, key){
                                var _file = request.uploadFile(file),
                                    _worksheet = node_xlsx.readFile(_file.path),
                                    _data = [];
                                Object.keys(_worksheet.Sheets).map((name)=>{
                                    _data = node_xlsx.utils.sheet_to_json(_worksheet.Sheets[name], {
                                        header: 1,
                                        raw: true
                                    });
                                    _data = _data.map(function (item, index){
                                        if(index<2){ return; }
                                        if(item[0]){
                                            _lastProv = item[0];
                                        }else {
                                            item[0] = _lastProv;
                                        }
                                        if(item[1]){
                                            _lastCity = item[1];
                                            _lastLevel = item[2];
                                        }else {
                                            item[1] = _lastCity;
                                            item[2] = _lastLevel;
                                        }
                                        if(item.length<4){
                                            return;
                                        }

                                        _sqls.push(zn.sql.insert({
                                            table: 'zn_adinstall_supplier',
                                            values: {
                                                province: _keys[item[0].trim()]||0,
                                                city: _keys[item[1].trim().replace('区', '')]||0,
                                                level:item[2]||'',
                                                name: item[3]||'',
                                                phone: item[4]||'',
                                                telephone: item[5]||'',
                                                address: item[6]||'',
                                                qq: item[7]||'',
                                                type: (item[8]||'')=='公司'?1:0,
                                                company_title: item[9]||'',
                                                company_main_business: item[10]||'',
                                                work_types: item[11]||'',
                                                work_fee: item[12]|0,
                                                work_performance: item[13]||'',
                                                bank_card_name: item[15]||'',
                                                bank_card_id: item[16]||'',
                                                bank_card_title: item[17]||''
                                            }
                                        }));
                                        return item;
                                    });
                                    _result.push(_data);
                                });
                            });

                            return _sqls.join('');
                        }, function (data){
                            response.success(_result);
                        }).commit();
                }
            }
        }
    });

});
