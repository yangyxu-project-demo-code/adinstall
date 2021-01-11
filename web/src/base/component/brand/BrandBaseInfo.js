var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			info: null
		}
	},
	componentDidMount: function (){
		this.__loadBaseInfo(this.props.znid);
	},
	__loadBaseInfo: function (zn_id){
		zn.http.post('/zn.plugin.admin/model/selectOne', {
			model: 'AdinstallBrand',
			where: { zn_id: zn_id }
		}).then(function (data){
			this.setState({ info: data.result });
		}.bind(this));
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="正在加载中..." loader="timer" />;
		}
		return (
			<div className="zn-plugin-admin-base-info adinstall-admin-brand-info">
				<div className="right">
					<div className="base">
						<img className="logo" src={zn.http.fixURL(this.state.info.logo)} />
						<span className="title">{this.state.info.zn_title}</span>
					</div>
					<div className="item-group">
						<div className="group-title">基本信息</div>
						<div className="item">
							<span className="item-key">广告位类型: </span>
							<span className="item-value">{this.state.info.adv_type_ids}</span>
						</div>
						<div className="item">
							<span className="item-key">省: </span>
							<span className="item-value">{this.state.info.province_convert}</span>
						</div>
						<div className="item">
							<span className="item-key">市: </span>
							<span className="item-value">{this.state.info.city_convert}</span>
						</div>
						<div className="item">
							<span className="item-key">地址: </span>
							<span className="item-value">{this.state.info.address}</span>
						</div>
						<div className="item">
							<span className="item-key">介绍: </span>
							<span className="item-value">{this.state.info.comment}</span>
						</div>
						<div className="item">
							<span className="item-key">说明: </span>
							<span className="item-value">{this.state.info.zn_note}</span>
						</div>
						<div className="item">
							<span className="item-key">创建时间: </span>
							<span className="item-value">{this.state.info.zn_create_time}</span>
						</div>
					</div>
					<div className="item-group">
						<div className="group-title">联系人</div>
						<div className="item">
							<span className="item-key">姓名: </span>
							<span className="item-value">{this.state.info.contact}</span>
						</div>
						<div className="item">
							<span className="item-key">电话: </span>
							<span className="item-value">{this.state.info.phone}</span>
						</div>
						<div className="item">
							<span className="item-key">邮箱: </span>
							<span className="item-value">{this.state.info.email}</span>
						</div>
					</div>
					<div className="item-group">
						<div className="group-title">文件</div>
						<div className="item">
							<span className="item-key">附件: </span>
							<div className></div>
							<div className="item-value">
								<zn.react.Files value={this.state.info.attachments} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
