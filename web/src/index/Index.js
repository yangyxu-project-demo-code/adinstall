var React = require('React');

module.exports = React.createClass({
    componentDidMount: function (){
        this.__getUserInfoByOpenId();
	},
    __getUserInfoByOpenId: function (){
        zn.http.post('/adinstall/user/getUserByOpenId', {
            openid: zn.plugin.wechat.getToken().openid
        }).then(function (data){
            if(data.status==200){
                var _user = data.result;
                if(!_user){
                    return zn.react.session.jump('/guest.home');
                }else if(_user.supplier_type != null){
                    return zn.react.session.jump('/supplier.home');
                }else if(_user.isAdmin) {
                    zn.react.session.setKeyValue("ADINSTALL_ADMIN", _user);
                    zn.react.session.jump('/admin.home');
                }
            }else {
                zn.react.session.jump('/guest.home');
            }
        }, function (err) {
            zn.toast.error('网络请求失败！');
        });
    },
    render: function (){
        return (
            <div className="adinstall-index-index">
                <div className="loading">正在登陆中...</div>
            </div>
        );
    }
});
