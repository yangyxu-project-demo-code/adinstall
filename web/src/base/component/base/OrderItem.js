var React = require('react');

module.exports = React.createClass({
	__renderStatus: function (status){
		switch (status) {
			case 0:
				return <span style={{color:'#FF9800'}}>待审核</span>;
			case -1:
				return <span style={{color:'#FF5722'}}>已驳回</span>;
			case 1:
				return <span style={{color:'#2196F3'}}>待接单</span>;
			case -2:
				return <span style={{color:'#f91100'}}>已拒单</span>;
			case 2:
				return <span style={{color:'#f0ad4e'}}>已接单</span>;
			case -3:
				return <span style={{color:'#f91100'}}>签收被驳回</span>;
			case 3:
				return <span style={{color:'#4FCCD9'}}>待签收</span>;
			case 4:
				return <span style={{color: '#6d81ec'}}>签收待监理确认</span>;
			case 5:
				return <span style={{color: '#d068e2'}}>签收待项目确认</span>;
			case 6:
				return <span style={{color: '#673AB7'}}>待结算</span>;
			case 7:
				return <span style={{color: '#0aca12'}}>已结算</span>;
			case 8:
				return <span style={{color: '#b5b1b1'}}>已关闭</span>;
		}
	},
	__supplierRender: function (value) {
		if(value){
			var _values = value.split('&&__zn__&&');
			return <div className="field value" style={{color: '#2197f5'}}>
			   <span><i className="fa fa-user-md" />供应商(执行)：<a href={zn.react.session.relativeURL('/adinstall.base.common.supplier.center', {znid: _values[2]})}>{_values[0]}</a></span>
		   	</div>;
		}else {

		}
	},
	render:function(){
		var item = this.props.data || this.props;
		return (
			<div className="adinstall-base-component-order-item" >
				<div className="title">
					<div>
						<span className="work-type">{item.work_type_convert}</span>
						<span className="code">{item.code}</span>
					</div>
					{this.__renderStatus(item.status)}
				</div>
				<div className="info" onClick={this.props.onClick}>
					{
						item.brand_logo_convert && <img className="icon" src={zn.http.fixURL(item.brand_logo_convert)} />
					}
					<div className="fields">
						<div className="field" style={{ fontWeight: 'bold' }}>
							<span>{item.brand_shop_title_convert}</span>
						</div>
						<div className="field value" style={{color: '#d9534f'}}>
							<span><i className="fa fa-map-marker" />{item.brand_shop_address_convert}</span>
						</div>
						<div className="field value">
							<span><i className="fa fa-clock-o" />{item.plan_start_time} ~ {item.plan_end_time}</span>
						</div>
						<div className="field value">
							<span><i className="fa fa-rmb" />费用：<i style={{color:'#d9534f', fontWeight:'bold'}}>{(item.cost||0).toFixed(2)}</i></span>
						</div>
						<div className="field value">
							<span><i className="fa fa-user" />负责人：{item.zn_create_user_convert}</span>
						</div>
						{this.__supplierRender(item.supplier_openid_convert)}
					</div>
				</div>
			</div>
		);
	}
});
