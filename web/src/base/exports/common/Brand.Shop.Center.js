var React = require('react');
var BrandShopBaseInfo = zn.app.adinstall.BrandShopBaseInfo;
var BrandShopAdvs = zn.app.adinstall.BrandShopAdvs;
var BrandShopStaffs = zn.app.adinstall.BrandShopStaffs;
var BrandShopTasks = zn.app.adinstall.BrandShopTasks;

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			view: BrandShopBaseInfo,
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
				title="门店详情"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="view"
					onClick={(data)=>this.setState({ view: data.value })}
					value={this.state.view}
					data={[
						{ view: BrandShopBaseInfo, text: '基本信息' },
						{ view: BrandShopAdvs, text: '广告位' },
						//{ view: BrandShopStaffs, text: '店员' },
						{ view: BrandShopTasks, text: '工单' }
					]} />}
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick} >
				{this.state.view && <this.state.view znid={this.props.request.search.znid} />}
			</zn.react.Page>
		);
	}
});
