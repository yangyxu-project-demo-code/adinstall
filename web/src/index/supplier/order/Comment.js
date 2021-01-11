var React = require('react');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', { model: 'AdinstallProjectItemComment', where: { supplier_openid: zn.plugin.wechat.getToken().openid } })
		}
	},
	__onPagingListData: function (){
		zn.preloader.close();
	},
	__itemRender: function (item, index){
		return (
			<div className="adinstall-group" style={{backgroundColor: '#FFF'}}>
				<div className="group-item">
					<span className="_key">时间: </span>
					<span className="_value">{item.zn_create_time}</span>
				</div>
				<div className="group-item">
					<span className="_key">工单号: </span>
					<a className="_value" href={zn.react.session.relativeURL('/supplier.order.info', { orderCode: item.order_code })}>{item.order_code}</a>
				</div>
				<div className="group-item">
					<span className="_key">标题: </span>
					<span className="_value">{item.zn_title}</span>
				</div>
				<div className="group-item">
					<span className="_key">内容: </span>
					<span className="_value">{item.comment}</span>
				</div>
			</div>
		);
	},
	render: function(){
		return (
			<zn.react.Page
				className="adinstall-index-supplier-comment"
				title="售后 - 评价" >
				<zn.react.PagingList className="comments" onData={this.__onPagingListData} data={this.state.data} itemRender={this.__itemRender} />
			</zn.react.Page>
		);
	}
});
