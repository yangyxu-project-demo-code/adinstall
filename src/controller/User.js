zn.define(function (){

    return zn.Controller('user', {
        methods: {
            getUserByOpenId: {
                method: 'POST',
                argv: {
                    openid: null
                },
                value: function (request, response, chain){
                    var _user = null,
                        _admin = null,
                        _openid = request.getValue('openid');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_adinstall_user',
                            where: {
                                openid: _openid
                            }
                        }) + zn.sql.select({
                            table: 'zn_plugin_admin_user',
                            fields: 'id, name, pin_yin, email, phone, avatar_img, last_login_time',
                            where: {
                                zn_plugin_wechat_open_id: _openid
                            }
                        }))
                        .query("Select User Info: ", function (sql, data){
                            _user = data[0][0];
                            _admin = data[1][0];
                            if(_admin){
                                _admin.isAdmin = true;
                                _admin.password = null;
                                delete _admin.password;
                                request.setSession(_admin);
                                return response.success(_admin), false;
                            }
                            if(_user){
                                return zn.sql.select({
                                    table: _user.role,
                                    where: {
                                        openid: _openid
                                    }
                                });
                            }

                            return response.error('为查找到用户信息'), false;
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(data[0]);
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
