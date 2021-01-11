var React = require('react');

module.exports = React.createClass({
	getInitialState: function (){
		return {

		}
	},
	__formatPhone: function (value){
		if(value){
			value = value.replace(/\-/g, '');
			value = value.replace(/\s+/g, '');
		}

		return value;
	},
	__onAddressClick: function () {
		var _data = this.props.data;
		wx.openLocation({
			//latitude: 0, // 纬度，浮点数，范围为90 ~ -90
			//longitude: 0, // 经度，浮点数，范围为180 ~ -180。
			name: _data.brandshop.zn_title, // 位置名
			address: _data.brandshop.address, // 地址详情说明
			scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
			//infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
		});
	},
	__supplierRender: function (value) {
		if(value){
			var _values = value.split('&&__zn__&&');
			return <div className="group-item" >
				<span className="_key">供应商(执行)</span>
				<span className="_value">{_values[0]}</span>
			</div>;
		}else {

		}
	},
	render: function (){
		var _data = this.props.data;
		return (
			<div className="adv" >
				<div className="adinstall-group">
					<div className="group-title">
						<span>工单号 {_data.code}</span>
						<span>{_data.zn_create_time}</span>
					</div>
					<div className="group">
						<div className="group-item" >
							<span className="_key">工单类型</span>
							<span className="_value">{_data.work_type_convert}</span>
						</div>
						<div className="group-item" >
							<span className="_key">要求进场日期</span>
							<span className="_value">{_data.plan_start_time}</span>
						</div>
						<div className="group-item" >
							<span className="_key">要求完工日期</span>
							<span className="_value">{_data.plan_end_time}</span>
						</div>
						<div className="group-item" >
							<span className="_key">已预约时间</span>
							<span className="_value">{_data.order_time}</span>
						</div>
						<div className="group-item" >
							<span className="_key">费用</span>
							<span className="_value" style={{color:'#d9534f'}}>{_data.cost.toFixed(2)}<i className="fa fa-rmb zr-padding-3" /></span>
						</div>
						<div className="group-item" >
							<span className="_key">负责人</span>
							<span className="_value">{_data.zn_create_user_convert}</span>
						</div>
						{this.__supplierRender(_data.supplier_openid_convert)}
						<div className="group-item" >
							<span className="_key">效果图</span>
							<zn.react.Files className="_value" value={_data.requirement_images} />
						</div>
						<div className="group-item" >
							<span className="_key">附件</span>
							<zn.react.Files className="_value" value={_data.attactments} />
						</div>
						<div className="group-item" >
							<span className="_key">说明(备注)</span>
							<span className="_value">{_data.comment}</span>
						</div>
					</div>
				</div>
				<div className="adinstall-group">
					<div className="group-title">门店信息</div>
					<div className="group">
						<div className="group-item" >
							<span className="_key">所属品牌</span>
							<span className="_value">{_data.brand_id_convert}</span>
						</div>
						<div className="group-item" >
							<span className="_key">名称</span>
							<span className="_value">{_data.brandshop.zn_title}</span>
						</div>
						<div className="group-item" onClick={this.__onAddressClick} >
							<span className="_key">地址</span>
							<span className="_value">{_data.brandshop.address}</span>
							<i className="fa fa-angle-right" />
						</div>
						<div className="group-item" >
							<span className="_key">联系人</span>
							<span className="_value">{_data.brandshop.contact}</span>
						</div>
						<div className="group-item" >
							<span className="_key">座机</span>
							<a className="_value" href={"tel:"+this.__formatPhone(_data.brandshop.phone)}><i className="fa fa-phone zr-padding-3" />{_data.brandshop.phone}</a>
						</div>
						<div className="group-item" >
							<span className="_key">电话</span>
							<a className="_value" href={"tel:"+this.__formatPhone(_data.brandshop.telephone)}><i style={{fontSize: 16}} className="fa fa-mobile zr-padding-3" />{_data.brandshop.telephone}</a>
						</div>
						<div className="group-item" >
							<span className="_key">门店前景照</span>
							<span className="_value">
								<img className="img" src={zn.http.fixURL(_data.brandshop.logo)} />
							</span>
						</div>
						<div className="group-item" >
							<span className="_key">门店内景照</span>
							<div className="_value">
								<zn.react.Files value={_data.brandshop.images} />
							</div>
						</div>
						<div className="adinstall-group">
							<div className="group-title">广告位</div>
							<zn.app.adinstall.Advs data={_data.brandshopframes} status={_data.status} />
						</div>
					</div>
				</div>

			</div>
		);
	}
});
