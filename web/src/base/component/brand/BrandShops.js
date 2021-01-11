var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/brand/getShops', { znid: this.props.znid })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.znid != this.props.znid){
			this.state.data.extend({
				znid: nextProps.znid
			}).exec();
		}
	},
	__onCreateProjectTask: function (item){
		zn.react.session.relativeJump('/adinstall.base.my.brands.create.project.task', { znid: item.zn_id });
	},
	__onShopInfo: function (item){
		zn.react.session.relativeJump('/adinstall.base.common.brand.shop.center', { znid: item.zn_id });
	},
	__onItemRender: function (item){
		return <div className="adinstall-inner">
			{
				item.logo && <div className="inner-left">
					<img className="logo" src={zn.http.fixURL(item.logo)} />
				</div>
			}
			<div className="inner-right">
				<div className="r-header">
					<span className="name" onClick={()=>this.__onShopInfo(item)} data-tooltip="查看门店信息">
						{item.zn_title}
					</span>
				</div>
				<div className="r-item">
					<span className="_key"><i className="fa fa-map-marker zr-padding-3"/></span>
					<span className="_value">{item.address}</span>
				</div>
				<div className="r-item">
					<span className="_key">联系人：</span>
					<span className="_value">{item.contact}</span>
				</div>
				<div className="r-item">
					<span className="_key">座机：</span>
					<span className="_value">{item.phone}</span>
				</div>
				<div className="r-item">
					<span className="_key">手机号：</span>
					<span className="_value">{item.telephone}</span>
				</div>
			</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
