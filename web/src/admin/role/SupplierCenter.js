var React = require('react');
var Info = require('./supplier/Info.js');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			view: Info,
			toolbarItems: [
				{ text: '编辑', name: 'edit', icon: 'fa-edit', status: 'danger' }
			]
		};
  	},
	__onTabChange: function (data){
		this.setState({
			view: data.item.view
		});
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
				className="adinstall-admin-supplier-info"
				title="供应商"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="view"
					onClick={this.__onTabChange}
					value={this.state.view}
					data={[
						{ view: Info, text: '基本信息' },
						{ view: null, text: '工单' },
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
