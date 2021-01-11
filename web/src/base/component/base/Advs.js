var React = require('react');

var Adv = React.createClass({
	getInitialState: function (){
		return {
			active: false
		}
	},
	__getButtons: function (status){
		if(this.props.status==2){
			return [
				{ type: 'submit', icon: 'fa-upload', text: '上传施工图片', status: 'warning' }
			];
		}
		if(this.props.status==-3){
			return [
				{ type: 'submit', icon: 'fa-upload', text: '重新上传施工图片', status: 'warning' }
			];
		}
		return [];
	},
	render: function (){
		var item = this.props.data;
		return (
			<div className="adinstall-base-component-adv" >
				<div className="adv-title" onClick={()=>this.setState({ active: !this.state.active })}>
					<div className="title">
						{item.bsf_logo && <img style={{width: 32, height: 32}} src={zn.http.fixURL(item.bsf_logo)} />}
						{item.bsf_zn_title}
					</div>
					<i className={"fa " + (this.state.active?'fa-angle-down':'fa-angle-right')} />
				</div>
				<div className="adv-content" style={{display: (this.state.active?'block':'none')}}>
					<div className="adv-item">
						<span className="_key">编号</span>
						<span className="_value">{item.bsf_code}</span>
					</div>
					<div className="adv-item">
						<span className="_key">广告位置</span>
						<span className="_value">{item.bsf_adv_position}</span>
					</div>
					<div className="adv-item">
						<span className="_key">门店位置</span>
						<span className="_value">{item.bsf_shop_position}</span>
					</div>
					<div className="adv-item">
						<span className="_key">安装难度</span>
						<span className="_value">{item.bsf_install_difficulty}</span>
					</div>
					<div className="adv-item">
						<span className="_key">安装说明</span>
						<span className="_value">{item.bsf_install_guide}</span>
					</div>
					<div className="adv-item">
						<span className="_key">材质</span>
						<span className="_value">{item.bsf_cai_zhi}</span>
					</div>
					<div className="adv-item">
						<span className="_key">基层</span>
						<span className="_value">{item.bsf_ji_ceng}</span>
					</div>
					<div className="adv-item">
						<span className="_key">出血尺寸(高/宽)</span>
						<span className="_value">{(item.bsf_chu_xue_chi_cun_gao||0).toFixed(2)} / {(item.bsf_chu_xue_chi_cun_kuang||0).toFixed(2)}</span>
					</div>
					<div className="adv-item">
						<span className="_key">边框尺寸(高/宽)</span>
						<span className="_value">{(item.bsf_bian_kuang_chi_cun_gao||0).toFixed(2)} / {(item.bsf_bian_kuang_chi_cun_kuang||0).toFixed(2)}</span>
					</div>
					<div className="adv-item">
						<span className="_key">介绍</span>
						<span className="_value">{item.comment}</span>
					</div>
					<div className="adv-item">
						<span className="_key">安装前(上一次安装后)</span>
						<zn.react.Files className="_value" value={item.bsf_images} />
					</div>
					<zn.react.Form
						style={{padding: 5}}
						items={[
							{ title: '安装前(更新)', name: 'before_images', type: 'FileUploader' },
							{ title: '安装后', name: 'after_images', type: 'FileUploader', required: true },
							{ title: '工单备注', name: 'comment', type: 'Textarea' }
						]}
						merge="data"
						action="/adinstall/supplier_order/saveProjectItemShopFrameImages"
						exts={{ project_item_brand_shop_frame_id: item.id }}
						value={item}
						readonly={(this.props.status==2 || this.props.status==-3)?false:true}
						buttons={this.__getButtons()} />
				</div>
			</div>
		);
	}
});

var Advs = React.createClass({
	render: function (){
		return (
			<div className="adinstall-base-component-advs">
				{
					this.props.data.map(function (item){
						return <Adv data={item} status={this.props.status} />;
					}.bind(this))
				}
			</div>
		)
	}
});

Advs.Adv = Adv;

module.exports = Advs;
