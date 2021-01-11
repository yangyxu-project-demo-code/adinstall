var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			info: null,
			token: zn.plugin.wechat.getToken()
		};
  	},
	componentDidMount: function (){
		zn.http.post('/adinstall/supplier/getByOpenId', { openid: this.state.token.openid })
			.then(function (data) {
				if(data.status==200){
					this.setState({info: data.result})
				}else {
					zn.toast.error(data.result);
				}
			}.bind(this), function (){
				zn.toast.error('请求报错');
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
	__onExit: function (){
		zn.confirm('退出系统之后需要重新验证身份, 确认退出？', '提示', function () {
			zn.react.session.clear();
			window.location.href = window.location.origin + window.location.pathname;
		});
	},
	render: function(){
		return (
			<div className="adinstall-index-supplier-my">
				<div className="info">
					{
						this.state.info && <div className="tags">
							<span className="tag">{this.state.info.level}</span>
							<span className="tag">{this.state.info.supplier_type?'系统供应商':'平台供应商'}</span>
							<span className="tag">{this.state.info.type?'工人':'公司'}</span>
						</div>
					}
					<div className="wechat">
						<img className="avatar" src={this.state.token.headimgurl} />
						<div className="address">
							{this.state.token.country && <span>{this.state.token.country} / </span>}
							{this.state.token.province && <span>{this.state.token.province} / </span>}
							<span>{this.state.token.city}</span>
						</div>
						<div>{this.state.info?this.state.info.name + '(' + this.state.token.nickname + ')':this.state.token.nickname}</div>
					</div>
					<div className="supplier">

					</div>
				</div>
				<div className="group-title">我的</div>
				<div className="group">
					<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.my.orders')}>
						<i className="fa fa-list-ul" />
						<span>工单</span>
						<i className="fa fa-angle-right" />
					</div>
					<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.my.message')}>
						<i className="fa fa-commenting-o" />
						<span>消息</span>
						<i className="fa fa-angle-right" />
					</div>
					<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.my.base.info')}>
						<i className="fa fa-info-circle" />
						<span>个人信息</span>
						<i className="fa fa-angle-right" />
					</div>
					{
						/*
						<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.my.bills')}>
							<i className="fa fa-credit-card" />
							<span>结算账单</span>
							<i className="fa fa-angle-right" />
						</div>
						*/
					}
				</div>

				<div className="group-title">售后</div>
				<div className="group">
					{
						/*
						<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.order.service')}>
							<i className="fa fa-wrench" />
							<span>报修</span>
							<i className="fa fa-angle-right" />
						</div>
						*/
					}

					<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.order.complaint')}>
						<i className="fa fa-comment" />
						<span>投诉</span>
						<i className="fa fa-angle-right" />
					</div>
					<div className="group-item" onClick={()=>zn.react.session.jump('/supplier.order.comment')}>
						<i className="fa fa-edit" />
						<span>评价</span>
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
				<div onClick={this.__onExit} className="submit">退出系统(重新绑定)</div>
			</div>
		);
	}
});
