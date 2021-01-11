zn.define(function (){

    return zn.Controller('detail', {
        methods: {
            getBrandDetail: {
                method: 'POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    var _znid = request.getValue('znid'),
                        _brand = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_brand',
                            fields: '*',
                            where: { zn_id: _znid }
                        }))
                        .query('select project item', function (sql, data) {
                            _brand = data[0];
                            if(!_brand){
                                return response.error('该品牌不存在'), false;
                            }
                            return [
                                'select count(*) from zn_adinstall_brand_shop',
                                'select count(*) from '
                            ];
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
            getProjectDetail: {
                method: 'POST',
                argv: {
                    znid: null
                },
                value: function (request, response, chain){
                    var _znid = request.getValue('znid'),
                        _value = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_project',
                            fields: '*',
                            where: { zn_id: _znid }
                        }))
                        .query('select project item', function (sql, data) {
                            _value = data[0];
                            if(!_value){
                                return response.error('该项目不存在'), false;
                            }
                            return [
                                'select count(*) as item_total_count, sum(cost) as item_total_cost from zn_adinstall_project_item where project_id='+_value.id,
                                'select count(*) as shop_frame_total_count from zn_adinstall_project_item_shop_frame where project_id='+_value.id,
                                'select count(*) as complaint_total_count from zn_adinstall_project_item_complaint where project_id='+_value.id,
                                'select count(*) as comment_total_count from zn_adinstall_project_item_comment where project_id='+_value.id,
                                'select count(*) as region_total_count from zn_adinstall_project_region where project_id='+_value.id
                            ].join(';');
                        }, function (err, data){
                            if(err){
                                response.error(err.message);
                            }else {
                                data.forEach(function (item, index){
                                    zn.extend(_value, item[0]||{});
                                });
                                response.success(_value);
                            }
                        })
                        .commit();
                }
            },
        }
    });

});
