var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			seconds: 0,
			phone: null,
			code: null
		};
  	},
	__onGetCode: function (){
		var _phone = ReactDOM.findDOMNode(this.refs.phone).value.trim();
		if(!_phone || _phone.length<11){
			return zn.toast.warning('手机号无效！'), false;
		}
		zn.http.post('/adinstall/sms/getCode', {phone: _phone})
			.then(function (data){
				if(data.status==200){
					zn.toast.success('短信发送成功！');
					this.setState({
						seconds: 30
					});
					this._interval = window.setInterval(function (){
						this.state.seconds -= 1;
						if(!this.state.seconds){
							window.clearInterval(this._interval);
						}
						this.forceUpdate();
					}.bind(this), 1000);
				}else {
					zn.toast.error('请求失败！');
				}
			}.bind(this), function (){
				zn.toast.error('请求失败！');
			});
	},
	__onSubmit: function (){
		this.state.phone = ReactDOM.findDOMNode(this.refs.phone).value;
		this.state.code = ReactDOM.findDOMNode(this.refs.code).value;
		if(!this.state.phone || !this.state.code){
			return zn.toast.warning('手机号或验证码不能为空！'), false;
		}

		zn.http.post('/adinstall/supplier/auth', {
			phone: this.state.phone,
			code: this.state.code,
			openid: zn.plugin.wechat.getToken().openid
		}).then(function (data){
			if(data.status==200){
				zn.toast.success(data.result);
				zn.react.session.jump('/supplier.home');
			}else {
				zn.toast.error('认证失败：' + data.result);
			}
		}, function (){
			zn.toast.error('网络请求失败');
		});
	},
	render: function(){
		return (
			<zn.react.Page className="adinstall-index-supplier-auth" title="供应商 - 申请认证">
				<div className="auth-form">
					<div className="form-item">
						<i className="fa fa-mobile" />
						<input ref="phone" type="number" name="phone" />
						{this.state.seconds ? <span className="get-code disabled">({this.state.seconds}秒)后再获取</span> : <span onClick={this.__onGetCode} className="get-code ">获取验证码</span>}
					</div>
					<div className="form-item">
						<i className="fa fa-code" />
						<input ref="code" type="number" name="code" />
					</div>
				</div>
				<div onClick={this.__onSubmit} className="auth-submit">提交认证</div>
			</zn.react.Page>
		);
	}
});
