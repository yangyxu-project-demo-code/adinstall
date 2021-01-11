var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			info: null,
			currType: 0
		}
	},
	componentDidMount: function (){
		this.__loadBaseInfo(this.props.request.search.id);
	},
	__loadBaseInfo: function (id){
		zn.http.post('/zn.plugin.admin/model/selectOne', {
			model: 'AdinstallBrandShop',
			where: { id: id }
		}).then(function (data){
			this.setState({ info: data.result });
		}.bind(this));
	},
	__renderTabView: function (){
		switch (this.state.currType) {
			case 0:
				return <div>门店列表</div>;
			case 1:
				return <div>报价系统</div>;
		}
	},
	__onTabClick: function (value){
		this.setState({currType: value.value});
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}
		return (
			<zn.react.Page className="adinstall-admin-brand-shop-info" title={this.state.info.zn_title} >
				<div className="base-info">
					<div className="left">
						<img className="logo" src={zn.http.fixURL(this.state.info.logo)} />
					</div>
					<div className="right">
						<div>{this.state.info.zn_title}</div>
						<div>联系人: {this.state.info.contact}</div>
						<div>联系人电话: {this.state.info.phone}</div>
						<div>联系人邮箱: {this.state.info.email}</div>
					</div>
				</div>
				<div className="tabs">
					<zn.react.ListView value={this.state.currType} className="zr-tab-android" items={[{text:'门店列表', value: 0}, {text:'品牌报价', value: 1}]} onClick={this.__onTabClick} />
					{this.__renderTabView()}
				</div>
			</zn.react.Page>
		);
	}
});
