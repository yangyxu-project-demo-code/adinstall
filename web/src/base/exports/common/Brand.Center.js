var React = require('react');
var BaseInfo = zn.app.adinstall.BrandBaseInfo;
var Shops = zn.app.adinstall.BrandShops;
var Projects = zn.app.adinstall.BrandProjects;
var BrandTasks = zn.app.adinstall.BrandTasks;

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			view: BaseInfo,
			toolbarItems: [
				{ text: '编辑', name: 'edit', icon: 'fa-edit', status: 'danger' }
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
				title="品牌详情"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="view"
					onClick={(data)=>this.setState({ view: data.value })}
					value={this.state.view}
					data={[
						{ view: BaseInfo, text: '基本信息' },
						{ view: Shops, text: '门店管理' },
						{ view: Projects, text: '项目管理' },
						{ view: BrandTasks, text: '工单管理' }
					]} />}
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick} >
				{this.state.view && <this.state.view znid={this.props.request.search.znid} />}
			</zn.react.Page>
		);
	}
});
