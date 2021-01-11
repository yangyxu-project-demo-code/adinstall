var React = require('react');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', { model: 'AdinstallProjectItemComplaint', where: { supplier_openid: this.props.openid } })
		}
	},
	__onPagingListData: function (){
		zn.preloader.close();
	},
	__itemRender: function (item, index){
		return (
			<div className="adinstall-group" style={{backgroundColor: '#FFF'}}>
				<div className="group-item">
					<span className="_key">创建时间: </span>
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
					<span className="_key">类型: </span>
					<span className="_value">{item.type}</span>
				</div>
				<div className="group-item">
					<span className="_key">投诉内容: </span>
					<span className="_value">{item.comment}</span>
				</div>
				<div className="group-item">
					<span className="_key">附件: </span>
					<zn.react.Files className="_value" value={item.attachments} />
				</div>
			</div>
		);
	},
	render: function(){
		return (
			<zn.react.PagingList onData={this.__onPagingListData} data={this.state.data} itemRender={this.__itemRender} />
		);
	}
});
