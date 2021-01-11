var React = require('react');
var BaseInfo = zn.app.adinstall.SupplierBaseInfo;
var SupplierTasks = zn.app.adinstall.SupplierTasks;
var SupplierMessages = zn.app.adinstall.SupplierMessages;
var SupplierSuggestions = zn.app.adinstall.SupplierSuggestions;

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			view: BaseInfo,
			toolbarItems: [
				//{ text: '编辑', name: 'edit', icon: 'fa-edit', status: 'danger' }
			]
		};
  	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'edit':
				zn.notification.warning('还未开发');
				break;
		}
	},
	render: function(){
		return (
			<zn.react.Page
				title="供应商详情"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="view"
					onClick={(data)=>this.setState({ view: data.value })}
					value={this.state.view}
					data={[
						{ view: BaseInfo, text: '基本信息' },
						{ view: SupplierTasks, text: '工单' },
						{ view: SupplierMessages, text: '消息' },
						{ view: SupplierSuggestions, text: '意见' },
						{ view: null, text: '投诉' },
						{ view: null, text: '评价' }
					]} />}
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick} >
				{this.state.view && <this.state.view znid={this.props.request.search.znid} />}
			</zn.react.Page>
		);
	}
});
