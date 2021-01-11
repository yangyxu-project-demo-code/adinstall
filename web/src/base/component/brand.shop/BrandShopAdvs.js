var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/shop/getAdvs', { znid: this.props.znid })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.znid != this.props.znid){
			this.state.data.extend({
				znid: nextProps.znid
			}).exec();
		}
	},
	__onItemRender: function (item){
		return <div className="adinstall-base-component-adv" style={{backgroundColor: '#FFF'}} >
			<div className="adv-title">
				<div className="title">
					{item.logo && <img style={{width: 32, height: 32}} src={zn.http.fixURL(item.logo)} />}
					{item.zn_title}
				</div>
			</div>
			<div className="adv-content">
				<div className="adv-item">
					<span className="_key">编号</span>
					<span className="_value">{item.code}</span>
				</div>
				<div className="adv-item">
					<span className="_key">广告位置</span>
					<span className="_value">{item.adv_position}</span>
				</div>
				<div className="adv-item">
					<span className="_key">门店位置</span>
					<span className="_value">{item.shop_position}</span>
				</div>
				<div className="adv-item">
					<span className="_key">安装难度</span>
					<span className="_value">{item.install_difficulty}</span>
				</div>
				<div className="adv-item">
					<span className="_key">安装说明</span>
					<span className="_value">{item.install_guide}</span>
				</div>
				<div className="adv-item">
					<span className="_key">材质</span>
					<span className="_value">{item.cai_zhi}</span>
				</div>
				<div className="adv-item">
					<span className="_key">基层</span>
					<span className="_value">{item.ji_ceng}</span>
				</div>
				<div className="adv-item">
					<span className="_key">出血尺寸(高/宽)</span>
					<span className="_value">{(item.chu_xue_chi_cun_gao||0).toFixed(2)} / {(item.chu_xue_chi_cun_kuang||0).toFixed(2)}</span>
				</div>
				<div className="adv-item">
					<span className="_key">边框尺寸(高/宽)</span>
					<span className="_value">{(item.bian_kuang_chi_cun_gao||0).toFixed(2)} / {(item.bian_kuang_chi_cun_kuang||0).toFixed(2)}</span>
				</div>
				<div className="adv-item">
					<span className="_key">介绍</span>
					<span className="_value">{item.comment}</span>
				</div>
				<div className="adv-item">
					<span className="_key">当前画面</span>
					<zn.react.Files className="_value" value={item.images} />
				</div>
			</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" className="adinstall-base-my-own-region-tasks" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
