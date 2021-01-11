var React = require('react');

var Message = React.createClass({
	getInitialState: function (){
		return {
			has_read: this.props.has_read,
			active: false
		}
	},
	__onActive: function (){
		this.setState({
			active: !this.state.active,
			has_read: 1
		});
		if(!this.state.has_read){
			zn.http.post('/zn.plugin.admin/model/update', {
				model: 'AdinstallSupplierMessage',
				updates: { has_read: 1 },
				where: { id:this.props.id }
			});
		}
	},
	render: function (){
		return (
			<div className={"message status-" + (this.state.has_read).toString() + " active-"+(+this.state.active)}>
				<div className="title">
					{this.props.title}
					<i onClick={this.__onActive} className={"fa " + (this.state.active?"fa-angle-down":"fa-angle-right")} />
				</div>
				<div className="inner">
					<div className="content">{this.props.content}</div>
					<div className="time">{this.props.zn_create_time}</div>
				</div>
			</div>
		);
	}
});

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
				title="我的 - 消息"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="type"
					onClick={this.__onTypeChange}
					value={this.state.type}
					data={[
						{ type: 0, text: '未读' },
						{ type: 1, text: '已读' }
					]} />} >
				<zn.react.PagingList className="messages" onData={this.__onPagingListData} data={this.state.data} itemRender={this.__itemRender} />
			</zn.react.Page>
		);
	}
});
