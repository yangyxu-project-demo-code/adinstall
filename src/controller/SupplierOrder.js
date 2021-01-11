zn.define(function (){

    return zn.Controller('supplier_order', {
        methods: {
            complaint: {
                method: 'GET/POST',
                argv: {
                    project_item_id: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item_complaint',
                            fields: '*',
                            where: {
                                project_item_id: _values.project_item_id
                            }
                        }))
                        .query('accept ', function (sql, data){
                            _order = data[0];
                            if(_order){
                                return response.error('您已经完成投诉, 请耐心等待。'), false;
                            }

                            return zn.sql.insert({
                                table: 'zn_adinstall_project_item_complaint',
                                values: _values
                            });
                        }, function (err, data){
                            if(err){
                                response.error('投诉失败：'+ err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _values.supplier_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有新的投诉, 未处理系统将自动扣除积分及相关费用, 谢谢配合！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待处理',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: _values.comment + ", 查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                            }
                        }).commit();
                }
            },
            comment: {
                method: 'GET/POST',
                argv: {
                    project_item_id: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item_comment',
                            fields: '*',
                            where: {
                                project_item_id: _values.project_item_id
                            }
                        }))
                        .query('accept ', function (sql, data){
                            _order = data[0];
                            if(_order){
                                return response.error('您已经完成评价, 谢谢您的支持。'), false;
                            }

                            return zn.sql.insert({
                                table: 'zn_adinstall_project_item_complaint',
                                values: _values
                            });
                        }, function (err, data){
                            if(err){
                                response.error('投诉失败：'+ err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _values.supplier_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有新的评价！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待查看',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: _values.comment + ", 查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                            }
                        }).commit();
                }
            },
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
                                    'zn_plugin_admin_convert_user(zn_create_user) as zn_create_user_convert',
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
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    supplier_openid: _openid,
                                    type: '供应商已接单',
                                    status: '等待供应商执行',
                                    project_id: _order.project_id,
                                    project_item_id: _order.id,
                                    brand_id: _order.brand_id,
                                    brand_shop_id: _order.brand_shop_id
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
                            fields: '*, adinstall_convert_admin_user_openid(zn_create_user) as create_openid',
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
                                updates: "status=-2, supplier_openid='', suppliers=concat(suppliers, ',', supplier_openid, ',')",
                                where: {
                                    code: _orderCode,
                                    supplier_openid: _openid
                                }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    supplier_openid: _openid,
                                    type: '供应商已拒单',
                                    status: '等待区域监理处理',
                                    project_id: _order.project_id,
                                    project_item_id: _order.id,
                                    brand_id: _order.brand_id,
                                    brand_shop_id: _order.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _order.create_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您创建的工单 " + _order.code + " 被供应商拒单！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '已拒单',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "工单被拒单, 可登陆后台重新指派工单。如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
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
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: '*, adinstall_convert_admin_user_openid(zn_create_user) as create_openid',
                            where: {
                                code: _orderCode
                            }
                        }))
                        .query('update order', function (sql, data) {
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }

                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: "sign_in_time=now(), sign_in_address='"+_address+"'",
                                where: {
                                    code: _orderCode
                                }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    supplier_openid: _order.supplier_openid,
                                    type: '供应商已签到',
                                    status: '工单执行中',
                                    project_id: _order.project_id,
                                    project_item_id: _order.id,
                                    brand_id: _order.brand_id,
                                    brand_shop_id: _order.brand_shop_id
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
            doSign: {
                method: 'GET/POST',
                argv: {
                    orderCode: null,
                    signature: null,
                    openid: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode'),
                        _signature = request.getValue('signature'),
                        _signature_note = request.getValue('signature_note'),
                        _openid = request.getValue('openid'),
                        _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: '*, adinstall_convert_admin_user_openid(zn_create_user) as create_openid',
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
                                    signature: _signature,
                                    signature_note: _signature_note,
                                    signature_openid: _openid,
                                    signature_time: "{{now()}}"
                                },
                                where: {
                                    code: _orderCode
                                }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    supplier_openid: _order.supplier_openid,
                                    type: '门店已签收',
                                    status: '等待区域监理审核',
                                    project_id: _order.project_id,
                                    project_item_id: _order.id,
                                    brand_id: _order.brand_id,
                                    brand_shop_id: _order.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _order.create_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您创建的工单 " + _order.code + " 已被门店签收！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '签收待监理审核',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "门店已签收工单, 等待监理确认。如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _order.supplier_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您执行的工单 " + _order.code + " 已被门店签收！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '签收待监理审核',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "门店已签收工单, 等待监理确认。如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
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
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: '*',
                            where: {
                                code: _orderCode
                            }
                        }))
                        .query('update order', function (sql, data){
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: _data,
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
            saveProjectItemShopFrameImages: {
                method: 'GET/POST',
                argv: {
                    data: null,
                    project_item_brand_shop_frame_id: null
                },
                value: function (request, response, chain){
                    var _project_item_brand_shop_frame_id = request.getValue('project_item_brand_shop_frame_id'),
                        _data = request.getValue('data');
                    this.beginTransaction()
                        .query(zn.sql.update({
                            table: 'zn_adinstall_project_item_shop_frame',
                            updates: _data,
                            where: {
                                id: _project_item_brand_shop_frame_id
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
                    var _orderCode = request.getValue('orderCode'),
                        _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: '*',
                            where: {
                                code: _orderCode
                            }
                        }))
                        .query('update order', function (sql, data){
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }

                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 3
                                },
                                where: {
                                    code: _orderCode
                                }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    supplier_openid: _order.supplier_openid,
                                    type: '供应商已提交工单',
                                    status: '等待门店签收',
                                    project_id: _order.project_id,
                                    project_item_id: _order.id,
                                    brand_id: _order.brand_id,
                                    brand_shop_id: _order.brand_shop_id
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
            resubmit: {
                method: 'GET/POST',
                argv: {
                    orderCode: null
                },
                value: function (request, response, chain){
                    var _orderCode = request.getValue('orderCode'),
                        _order = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: '*, adinstall_convert_admin_user_openid(zn_create_user) as create_openid',
                            where: {
                                code: _orderCode
                            }
                        }))
                        .query('update order', function (sql, data){
                            _order = data[0];
                            if(!_order){
                                return response.error('订单不存在'), false;
                            }

                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 4
                                },
                                where: {
                                    code: _orderCode
                                }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    supplier_openid: _order.supplier_openid,
                                    type: '供应商已重新提交工单',
                                    status: '等待区域监理审核',
                                    project_id: _order.project_id,
                                    project_item_id: _order.id,
                                    brand_id: _order.brand_id,
                                    brand_shop_id: _order.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error('操作失败：'+ err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _order.create_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "供应商重新提交工单 " + _order.code + " 数据！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '等待区域监理审核',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "供应商重新提交工单, 等待监理确认。如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });

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
                                table: 'zn_adinstall_project_item_shop_frame as psf left join zn_adinstall_brand_shop_frame as bsf on psf.brand_shop_frame_id = bsf.id',
                                fields: [
                                    'psf.*',
                                    'bsf.zn_title as bsf_zn_title',
                                    'bsf.code as bsf_code',
                                    'bsf.status as bsf_status',
                                    'bsf.adv_position as bsf_adv_position',
                                    'bsf.shop_position as bsf_shop_position',
                                    'bsf.ji_ceng as bsf_ji_ceng',
                                    'bsf.cai_zhi as bsf_cai_zhi',
                                    'bsf.jing_chi_cun_gao as bsf_jing_chi_cun_gao',
                                    'bsf.jing_chi_cun_kuang as bsf_jing_chi_cun_kuang',
                                    'bsf.bian_kuang_chi_cun_gao as bsf_bian_kuang_chi_cun_gao',
                                    'bsf.bian_kuang_chi_cun_kuang as bsf_bian_kuang_chi_cun_kuang',
                                    'bsf.chu_xue_chi_cun_gao as bsf_chu_xue_chi_cun_gao',
                                    'bsf.chu_xue_chi_cun_kuang as bsf_chu_xue_chi_cun_kuang',
                                    'bsf.produce_guide as bsf_produce_guide',
                                    'bsf.install_guide as bsf_install_guide',
                                    'bsf.install_difficulty as bsf_install_difficulty',
                                    'bsf.logo as bsf_logo',
                                    'bsf.images as bsf_images',
                                    'bsf.attachments as bsf_attachments',
                                    'bsf.comment as bsf_comment'
                                ],
                                where: [
                                    "psf.brand_shop_id = " + _order.brand_shop_id,
                                    " and psf.project_item_id = " + _order.id
                                ]
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
