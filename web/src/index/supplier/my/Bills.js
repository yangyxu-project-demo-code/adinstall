var React = require('react');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			type: 0,
			data: zn.store.post('/zn.plugin.admin/model/paging', { model: 'AdinstallSupplierMessage', where: { openid: zn.plugin.wechat.getToken().openid, has_read: 0 } })
		}
	},
	__onPagingListData: function (){
		zn.preloader.close();
	},
	__onTypeChange: function (value){
		this.state.data._data.where.has_read = value.value;
		this.state.data.refresh();
	},
	__itemRender: function (item, index){
		return (
			<Message key={item.id} {...item} />
		);
	},
	render: function(){
		return (
			<zn.react.Page
				className="adinstall-index-supplier-my-message"
				title="我的账单" >
				<zn.react.PagingList className="messages" onData={this.__onPagingListData} data={this.state.data} itemRender={this.__itemRender} />
			</zn.react.Page>
		);
	}
});
