zn.define(function (){

    return zn.Controller('regionproject', {
        methods: {
            submitAudit: {
                method: 'POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query('delete task', function (sql, data) {
                            return zn.sql.update({
                                table: 'zn_adinstall_project_region',
                                updates: { status: 1 },
                                where: { zn_id: request.getValue('znid') }
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
            audit: {
                method: 'POST',
                argv: {
                    znid: null,
                    data: null
                },
                value: function (request, response, chain){
                    var _data = request.getValue('data'),
                        _region = null;
                    var _sql = zn.sql.update({
                        table: 'zn_adinstall_project_region',
                        updates: request.getValue('data'),
                        where: { zn_id: request.getValue('znid') }
                    });

                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project_region',
                            where: { zn_id: request.getValue('znid') }
                        }))
                        .query('update region status', function (sql, data) {
                            _region = data[0];
                            if(!_region){
                                return response.error("订单不存在"), false;
                            }
                            if(_region.status==_data.status){
                                return response.success("请勿重复提交"), false;
                            }
                            if(_data.status==3){
                                _sql += zn.sql.select({
                                    table: 'zn_adinstall_project_item',
                                    where: {
                                        project_id: _region.project_id,
                                        project_region_id: _region.id,
                                        region: _region.region
                                    }
                                }) + zn.sql.update({
                                    table: 'zn_adinstall_project_item',
                                    updates: {
                                        status: 1
                                    },
                                    where: {
                                        project_id: _region.project_id,
                                        project_region_id: _region.id,
                                        region: _region.region
                                    }
                                });
                            }

                            return _sql;
                        })
                        .query('send message', function (sql, data) {
                            var _tasks = data[1],
                                _sql = [];
                            if(!_tasks){
                                return response.success('已驳回'), false;
                            }
                            _tasks.forEach(function (item, index){
                                _sql.push(zn.sql.insert({
                                    table: 'zn_adinstall_supplier_message',
                                    values: {
                                        openid: item.supplier_openid,
                                        title: '您有新的订单（待接单确认）',
                                        content: '编号为' + item.code + "的订单待您确认接单。"
                                    }
                                }));
                            });

                            return _sql.join('');
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success("审核通过");
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
