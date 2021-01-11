var React = require('react');
module.exports = React.createClass({
	getInitialState: function (){
		return {
			data: null
		}
	},
	componentDidMount: function (){
		this.__loadInfo();
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.znid != this.props.znid){
			this.__loadInfo(nextProps.znid);
		}
	},
	__loadInfo: function (znid){
		zn.http.post('/adinstall/supplier/getByOpenId', {
			zn_id: znid || this.props.znid
		}).then(function (data){
			this.setState({
				data: data.result
			});
		}.bind(this));
	},
	render: function(){
		if(this.state.data){
			return <div className="adinstall-admin-supplier-info">
				<div className="group-title">基本信息</div>
				<div className="group">
					<div className="group-item" >
						<span className="_key">姓名：</span>
						<span className="_value">{this.state.data.name}</span>
					</div>
					<div className="group-item" >
						<span className="_key">身份证号：</span>
						<span className="_value">{this.state.data.card_id}</span>
					</div>
					<div className="group-item" >
						<span className="_key">性别：</span>
						<span className="_value">{this.state.data.sex}</span>
					</div>
					<div className="group-item" >
						<span className="_key">年龄：</span>
						<span className="_value">{this.state.data.age}岁</span>
					</div>
					<div className="group-item" >
						<span className="_key">省 / 市：</span>
						<span className="_value">{this.state.data.province_convert} / {this.state.data.city_convert}</span>
					</div>
					<div className="group-item" >
						<span className="_key">地址：</span>
						<span className="_value">{this.state.data.address}</span>
					</div>
				</div>
				<div className="group-title">通信</div>
				<div className="group">
					<div className="group-item" >
						<span className="_key">手机号：</span>
						<span className="_value">{this.state.data.phone}</span>
					</div>
					<div className="group-item" >
						<span className="_key">座机：</span>
						<span className="_value">{this.state.data.telephone}</span>
					</div>
					<div className="group-item" >
						<span className="_key">QQ：</span>
						<span className="_value">{this.state.data.qq}</span>
					</div>
					<div className="group-item" >
						<span className="_key">微信号：</span>
						<span className="_value">{this.state.data.wechat}</span>
					</div>
				</div>
				<div className="group-title">工种</div>
				<div className="group">
					<div className="group-item" >
						<span className="_key">工种：</span>
						<div className="_value">
							{
								this.state.data.work_types_convert.split(',').map(function (type, index){
									if(type){
										return <span className="zr-tag">{type}</span>;
									}
								})
							}
						</div>
					</div>
					<div className="group-item" >
						<span className="_key">工龄：</span>
						<span className="_value">{this.state.data.work_age}月</span>
					</div>
					<div className="group-item" >
						<span className="_key">结算费用：</span>
						<span className="_value">{this.state.data.work_fee}元/平方</span>
					</div>
				</div>
				<div className="group-title">支付</div>
				<div className="group">
					<div className="group-item" >
						<span className="_key">银行卡名称：</span>
						<span className="_value">{this.state.data.bank_card_title}</span>
					</div>
					<div className="group-item" >
						<span className="_key">银行卡用户名：</span>
						<span className="_value">{this.state.data.bank_card_name}</span>
					</div>
					<div className="group-item" >
						<span className="_key">银行卡账号：</span>
						<span className="_value">{this.state.data.bank_card_id}</span>
					</div>
				</div>
				{
					!!this.state.data.type && <div style={{borderLeft: '2px solid #f0ad4e', margin: 5}}>
						<div className="group-title">企业信息</div>
						<div className="group">
							<div className="group-item" >
								<span className="_key">企业名称：</span>
								<span className="_value">{this.state.data.company_title}</span>
							</div>
							<div className="group-item" >
								<span className="_key">企业法人：</span>
								<span className="_value">{this.state.data.company_legal_person}</span>
							</div>
							<div className="group-item" >
								<span className="_key">企业税务登记号：</span>
								<span className="_value">{this.state.data.company_tax_id}</span>
							</div>
							<div className="group-item" >
								<span className="_key">企业主营业务：</span>
								<span className="_value">{this.state.data.company_main_business}</span>
							</div>
						</div>
					</div>
				}
			</div>;
		}else {
			return <zn.react.DataLoader loader="timer" content="加载中..." />;
		}
	}
});
