zn.define(function (){

    var _host = 'http://www.youyangit.com';
    var _host = 'http://adinstall.service.kylinpop.com';

    return zn.Controller('task', {
        methods: {
            ownConfirmed: {
                method: 'POST',
                value: function (request, response, chain){
                    var _task = null;
                    this.beginTransaction()
                        .query('select task', function (sql, data) {
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
                                where: { code: request.getValue('taskCode'), status: 6 }
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
            clearing: {
                method: 'POST',
                argv: {
                    taskCode: null
                },
                value: function (request, response, chain){
                    var _task = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_rights_owner_id) as zn_rights_owner_id_openid'
                            ],
                            where: { code: request.getValue('taskCode'), status: 6 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 7,
                                },
                                where: { code: _task.code }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _task.zn_rights_owner_id_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有新的工单" + _task.code + "等待审核！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待审核',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "监理已经审核等待您确认, 如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                }).then(function (data){
                                    if(data.errcode){
                                        response.error(data.errmsg);
                                    }else {
                                        response.success(data);
                                    }
                                });
                            }
                        })
                        .commit();
                }
            },
            supervisionReject: {
                method: 'POST',
                argv: {
                    taskCode: null,
                    comment: null
                },
                value: function (request, response, chain){
                    var _task = null,
                        _self = this;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_rights_owner_id) as zn_rights_owner_id_openid'
                            ],
                            where: { code: request.getValue('taskCode'), status: 4 }
                        }))
                        .query('reject task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: -3,
                                },
                                where: { code: _task.code }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '区域监理驳回签收工单',
                                    status: '等待供应商重新提交工单',
                                    comment: request.getValue('comment')||'',
                                    attachments: request.getValue('attachments')||'',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _task.supplier_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有已签收工单 " + _task.code + " 被区域监理驳回！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待重新提交',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "驳回说明：" + request.getValue('comment') + ", 如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                            }
                        })
                        .commit();
                }
            },
            supervisionConfirm: {
                method: 'POST',
                argv: {
                    taskCode: null
                },
                value: function (request, response, chain){
                    var _task = null,
                        _self = this;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_rights_owner_id) as zn_rights_owner_id_openid'
                            ],
                            where: { code: request.getValue('taskCode'), status: 4 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 5,
                                },
                                where: { code: _task.code }
                            }) + zn.sql.select({
                                table: 'zn_adinstall_project_region',
                                where: { id: _task.project_region_id }
                            }) + zn.sql.update({
                                table: 'zn_adinstall_project_region',
                                updates: 'task_finished_count=task_finished_count+1',
                                where: { id: _task.project_region_id }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '区域监理确认签收工单',
                                    status: '等待项目经理审核签收订单',
                                    comment: request.getValue('comment')||'',
                                    attachments: request.getValue('attachments')||'',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                if(data[1][0]){
                                    var _region = data[1][0];
                                    if(_region.task_finished_count + 1 == _region.task_count){
                                        _self.query(zn.sql.update({
                                            table: 'zn_adinstall_project_region',
                                            updates: 'status=1',
                                            where: { id: _region.id }
                                        }));
                                    }
                                }
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _task.zn_rights_owner_id_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有新的工单" + _task.code + "等待审核！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待审核',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "监理已经审核等待您确认, 如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                            }
                        })
                        .commit();
                }
            },
            ownConfirm: {
                method: 'POST',
                argv: {
                    taskCode: null
                },
                value: function (request, response, chain){
                    var _task = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_rights_owner_id) as zn_rights_owner_id_openid'
                            ],
                            where: { code: request.getValue('taskCode'), status: 5 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 6,
                                },
                                where: { code: _task.code }
                            }) + zn.sql.select({
                                table: 'zn_adinstall_project_item_shop_frame',
                                where: { project_item_id: _task.id }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '项目经理确认签收工单',
                                    status: '等待财务付款',
                                    comment: request.getValue('comment')||'',
                                    attachments: request.getValue('attachments')||'',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        })
                        .query("update shop frames", function (sql, data){
                            var _sql = [];
                            data[1].forEach(function (item, index){
                                if(item.after_images){
                                    _sql.push(zn.sql.update({
                                        table: 'zn_adinstall_brand_shop_frame',
                                        updates: {
                                            images: item.after_images,
                                        },
                                        where: { id: item.brand_shop_frame_id }
                                    }));
                                }
                            });

                            return _sql.join('');
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success('确认成功');
                                /*
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _task.zn_rights_owner_id_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有新的工单" + _task.code + "等待审核！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待审核',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "监理已经审核等待您确认, 如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                }).then(function (data){
                                    if(data.errcode){
                                        response.error(data.errmsg);
                                    }else {
                                        response.success(data);
                                    }
                                });
                                */
                            }
                        })
                        .commit();
                }
            },
            ownReject: {
                method: 'POST',
                argv: {
                    taskCode: null,
                    comment: null
                },
                value: function (request, response, chain){
                    var _task = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*'
                            ],
                            where: { code: request.getValue('taskCode'), status: 5 }
                        }))
                        .query('reject task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: -3,
                                },
                                where: { code: _task.code }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '项目经理驳回签收工单',
                                    status: '等待供应商重新提交工单',
                                    comment: request.getValue('comment')||'',
                                    attachments: request.getValue('attachments')||'',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _task.supplier_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.kylinpop.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有已签收工单 " + _task.code + " 被项目经理驳回！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '待重新提交',
                                            color: "#FF9800"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "驳回说明：" + request.getValue('comment') + ", 如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                            }
                        })
                        .commit();
                }
            },
            reject: {
                method: 'POST',
                argv: {
                    code: null,
                    note: null
                },
                value: function (request, response, chain){
                    var _task = null,
                        _note = request.getValue('note');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: ['*', 'zn_plugin_admin_convert_var(work_type) as work_type_convert', 'adinstall_convert_admin_user_openid(zn_create_user) as create_openid'],
                            where: { code: request.getValue('code'), status: 0 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: -1,
                                    zn_note: _note
                                },
                                where: { code: _task.code }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '项目经理驳回工单',
                                    status: '等待区域监理重新提交',
                                    comment: _note,
                                    attachments: request.getValue('attachments') || '',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(data);
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _task.create_openid,
                                    template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                    url: 'http://www.youyangit.com',
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "工单" + _task.code + "已被驳回！",
                                            color: "#f00f00"
                                        },
                                        keyword1: {
                                            value: '已驳回',
                                            color: "#173177"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "驳回原因：" + _note + ", 如有疑问请点击查看详情。",
                                            color: "#173177"
                                        }
                                    }
                                });
                            }
                        })
                        .commit();
                }
            },
            resolve: {
                method: 'POST',
                argv: {
                    code: null,
                    note: null
                },
                value: function (request, response, chain){
                    var _task = null,
                        _note = request.getValue('note');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'adinstall_convert_brand_shop(brand_shop_id) as brand_shop_id_convert',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_create_user) as create_openid'
                            ],
                            where: { code: request.getValue('code'), status: 0 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 1,
                                    zn_note: request.getValue('note')
                                },
                                where: { code: _task.code }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '项目经理确认工单',
                                    status: '等待供应商确认',
                                    comment: request.getValue('note')||'',
                                    attachments: request.getValue('attachments')||'',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success('审批成功');
                                if(_task.create_openid){
                                    zn.wx.accessTokenRequest('template.send', {
                                        touser: _task.create_openid,
                                        template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                        url: 'http://www.youyangit.com',
                                        topcolor: "#FF0000",
                                        data: {
                                            first: {
                                                value: "工单" + _task.code + "已审批通过！",
                                                color: "#5cb85c"
                                            },
                                            keyword1: {
                                                value: '审批通过',
                                                color: "#173177"
                                            },
                                            keyword2: {
                                                value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                                color: "#173177"
                                            },
                                            remark: {
                                                value: "备注：" + _note +", 如有疑问请点击查看详情。",
                                                color: "#173177"
                                            }
                                        }
                                    }).then(function (data){
                                        zn.debug(data);
                                    });
                                }
                                if(_task.supplier_openid){
                                    zn.wx.accessTokenRequest('template.send', {
                                        touser: _task.supplier_openid,
                                        template_id: "8pLzZf9ynixc_sfKIdetrlwmoSIYaMJpeJyTAUje5yE",
                                        url: _host + '/web/www/index.html#/supplier.order.info?orderCode=' + _task.code,
                                        topcolor: "#FF0000",
                                        data: {
                                            first: {
                                                value: "您有新的 "+_task.work_type_convert+" 工单待确认",
                                                color: "#5cb85c"
                                            },
                                            keyword1: {
                                                value: _task.code,
                                                color: "#173177"
                                            },
                                            keyword2: {
                                                value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                                color: "#173177"
                                            },
                                            keyword3: {
                                                value: _task.brand_shop_id_convert,
                                                color: "#173177"
                                            },
                                            remark: {
                                                value: "请尽快处理，谢谢合作。",
                                                color: "#173177"
                                            }
                                        }
                                    }).then(function (data){
                                        zn.debug(data);
                                    });
                                }
                            }
                        })
                        .commit();
                }
            },
            assign: {
                method: 'POST',
                argv: {
                    code: null,
                    supplier_openid: null,
                    zn_note: null
                },
                value: function (request, response, chain){
                    var _task = null,
                        _supplier_openid = request.getValue('supplier_openid'),
                        _note = request.getValue('zn_note');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'adinstall_convert_brand_shop(brand_shop_id) as brand_shop_id_convert',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_create_user) as create_openid'
                            ],
                            where: { code: request.getValue('code'), status: -2 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: {
                                    status: 1,
                                    supplier_openid: _supplier_openid,
                                    zn_note: _note
                                },
                                where: { code: _task.code }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '区域监理重新指派工单',
                                    status: '等待供应商确认',
                                    comment: _note || '',
                                    attachments: request.getValue('attachments')||'',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success('指派成功');
                                zn.wx.accessTokenRequest('template.send', {
                                    touser: _supplier_openid,
                                    template_id: "8pLzZf9ynixc_sfKIdetrlwmoSIYaMJpeJyTAUje5yE",
                                    url: _host + '/web/www/index.html#/supplier.order.info?orderCode=' + _task.code,
                                    topcolor: "#FF0000",
                                    data: {
                                        first: {
                                            value: "您有新的 "+_task.work_type_convert+" 工单待确认",
                                            color: "#5cb85c"
                                        },
                                        keyword1: {
                                            value: _task.code,
                                            color: "#173177"
                                        },
                                        keyword2: {
                                            value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                            color: "#173177"
                                        },
                                        keyword3: {
                                            value: _task.brand_shop_id_convert,
                                            color: "#173177"
                                        },
                                        remark: {
                                            value: "备注："+ _note + "。请尽快处理，谢谢合作。",
                                            color: "#173177"
                                        }
                                    }
                                }).then(function (data){
                                    zn.debug(data);
                                });
                            }
                        })
                        .commit();
                }
            },
            reSubmit: {
                method: 'POST',
                argv: {
                    code: null,
                    data: null
                },
                value: function (request, response, chain){
                    var _task = null,
                        _data = request.getValue('data');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_item',
                            fields: [
                                '*',
                                'adinstall_convert_brand_shop(brand_shop_id) as brand_shop_id_convert',
                                'zn_plugin_admin_convert_var(work_type) as work_type_convert',
                                'adinstall_convert_admin_user_openid(zn_rights_owner_id) as owner_openid'
                            ],
                            where: { code: request.getValue('code'), status: -1 }
                        }))
                        .query('resolve task', function (sql, data) {
                            _task = data[0];
                            if(!_task){
                                return response.error('工单不存在'), false;
                            }
                            _data.status = 0;
                            return zn.sql.update({
                                table: 'zn_adinstall_project_item',
                                updates: _data,
                                where: { code: _task.code }
                            }) + zn.sql.insert({
                                table: 'zn_adinstall_project_item_review',
                                values: {
                                    type: '区域监理重新提交工单',
                                    status: '等待项目经理审核',
                                    comment: _data.zn_note || '',
                                    project_id: _task.project_id,
                                    project_item_id: _task.id,
                                    brand_id: _task.brand_id,
                                    brand_shop_id: _task.brand_shop_id
                                }
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success('提交成功, 请耐心等待审批');
                                if(_task.owner_openid){
                                    zn.wx.accessTokenRequest('template.send', {
                                        touser: _task.owner_openid,
                                        template_id: "kSnKNOpMwuJuFh1Pb2ZtJ2y2u4p-YdssvGvb6Wz5ric",
                                        url: 'http://www.youyangit.com',
                                        topcolor: "#FF0000",
                                        data: {
                                            first: {
                                                value: "您有新的工单 " + _task.code + " 等待您审批！",
                                                color: "#5cb85c"
                                            },
                                            keyword1: {
                                                value: '待审批',
                                                color: "#173177"
                                            },
                                            keyword2: {
                                                value: new Date().format("yyyy-MM-dd hh:mm:ss"),
                                                color: "#173177"
                                            },
                                            remark: {
                                                value: "如有疑问请点击查看详情。",
                                                color: "#173177"
                                            }
                                        }
                                    }).then(function (data){
                                        zn.debug(data);
                                    });
                                }
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
