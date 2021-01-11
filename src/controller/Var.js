zn.define(function (){

    return zn.Controller('var', {
        methods: {
            getProvinces: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    this.query("select id as value, zn_title as text from zn_plugin_admin_var where zn_deleted=0 and locate(',44,', zn_tree_parent_path)<>0 and zn_tree_depth=4;")
                        .then(function(data){
                            response.success(data);
                        }, function (){
                            response.error(data);
                        });
                }
            },
            getCitys: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _pid = request.getInt('pid');
                    this.query("select id as value, zn_title as text from zn_plugin_admin_var where zn_deleted=0 and locate(',44,', zn_tree_parent_path)<>0 and zn_tree_depth=5"+(_pid?(" and zn_tree_pid="+_pid):'')+";")
                        .then(function(data){
                            response.success(data);
                        }, function (){
                            response.error(data);
                        });
                }
            },
            getShopFrames: {
                method: 'GET/POST',
                argv: {
                    shopId: null
                },
                value: function (request, response, chain){
                    this.query("select id as value, concat(zn_title, '【', adv_position, '】') as text from zn_adinstall_brand_shop_frame where zn_deleted=0 and status=0 and brand_shop_id={0};".format(request.getValue('shopId')))
                        .then(function(data){
                            response.success(data);
                        }, function (){
                            response.error(data);
                        });
                }
            },
            getRegionSupplier: {
                method: 'GET/POST',
                argv: {
                    work_type: null
                },
                value: function (request, response, chain){
                    var _city = request.getValue('city')||'';
                    if(_city){
                        _city = " and city=" + _city;
                    }
                    this.query("select openid as value, concat(name, ' / ', level, ' / ', zn_plugin_admin_convert_vars(work_types)) as text from zn_adinstall_supplier where zn_deleted=0 and status=1 and openid<>'' and locate(',{0},', work_types)<>0".format(request.getValue('work_type'))+_city+";")
                        .then(function(data){
                            response.success(data);
                        }, function (){
                            response.error(data);
                        });
                }
            }
        }
    });

});
