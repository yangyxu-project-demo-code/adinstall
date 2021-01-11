var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			info: zn.react.session.jsonKeyValue("ADINSTALL_ADMIN"),
			token: zn.plugin.wechat.getToken()
		};
  	},
	componentDidMount: function (){
		/*
		zn.http.post('/adinstall/supplier/getByOpenId', { openid: this.state.token.openid })
			.then(function (data) {
				if(data.status==200){
					this.setState({info: data.result})
				}else {
					zn.toast.error(data.result);
				}
			}.bind(this), function (){
				zn.toast.error('请求报错');
			});*/
	},
	__onExit: function (){
		zn.confirm('退出系统之后需要重新验证身份, 确认退出？', '提示', function () {
			zn.react.session.clear();
			window.location.href = window.location.origin + window.location.pathname;
		});
	},
	__onSuggest: function (){
		zn.dialog({
			title: '意见反馈',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: "AdinstallSupplierSuggestion"}}
				hiddens={{
					supplier_openid: zn.plugin.wechat.getToken().openid
				}}
				merge="values"
				itemClassName="column"
				items={[
					{ title: '反馈内容', name: 'comment', type: 'Textarea', required: true },
					{ title: '附件', name: 'attachments', type: 'FileUploader' }
				]} />
		});
	},
	render: function(){
		return (
			<div className="adinstall-index-admin-my">
				<div className="info">
					<div className="wechat">
						<img className="avatar" src={this.state.token.headimgurl} />
						<div className="address">
							{this.state.token.country && <span>{this.state.token.country} / </span>}
							{this.state.token.province && <span>{this.state.token.province} / </span>}
							<span>{this.state.token.city}</span>
						</div>
						<div>{this.state.info?this.state.info.name + '(' + this.state.token.nickname + ')':this.state.token.nickname}</div>
					</div>
				</div>
				<div className="group-title">我的</div>
				<div className="group">
					<div className="group-item" onClick={()=>zn.toast.warning('研发中')}>
						<i className="fa fa-commenting-o" />
						<span>消息</span>
						<i className="fa fa-angle-right" />
					</div>
					<div className="group-item" onClick={()=>zn.toast.warning('研发中')}>
						<i className="fa fa-info-circle" />
						<span>个人信息</span>
						<i className="fa fa-angle-right" />
					</div>
				</div>

				<div className="group-title">设置</div>
				<div className="group" onClick={()=>this.__onSuggest()}>
					<div className="group-item">
						<i className="fa fa-pencil" />
						<span>意见反馈</span>
						<i className="fa fa-angle-right" />
					</div>
				</div>
				<div onClick={this.__onExit} className="submit">退出系统</div>
			</div>
		);
	}
});
