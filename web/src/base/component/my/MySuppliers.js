var React = require('react');

var Province = React.createClass({
	getInitialState: function () {
		return {
			active: false
		}
	},
	render: function (){
		var province = this.props.province;
		return (
			<li className={"province " + (this.state.active?'active':'')}>
				<div className="header">
					{province.text}({province.suppliers.length}个供应商)
					<i onClick={()=>this.setState({active: !this.state.active})} style={{cursor: 'pointer'}} className={"fa zr-padding-5 "+(this.state.active?'fa-angle-down':'fa-angle-right')} />
				</div>
				<div className="content">
					<ul className="suppliers adinstall-base-grid">
						{
							province.suppliers.map(function (supplier, index){
								return <li key={index} className="supplier zr-item">
									<div className="adinstall-inner">
										{
											supplier.avatar && <div className="inner-left">
												<img src={zn.http.fixURL(supplier.avatar||'./')} />
											</div>
										}
										<div className="inner-right">
											<div className="r-header">
												<a href={zn.react.session.relativeURL('/adinstall.base.common.supplier.center', { znid: supplier.zn_id })} className="name">{supplier.name}</a>
												<span className="adinstall-tag">{supplier.level}</span>
												<span className="adinstall-tag">{supplier.supplier_type?'公司':'个人'}</span>
												<span className="adinstall-tag">{supplier.sex}</span>
												<span className="adinstall-tag">{supplier.age}岁</span>
												<span className="adinstall-tag">{supplier.city_convert}</span>
												<i data-tooltip="申请修改信息" className="fa fa-edit h-btn" />
											</div>
											<div className="r-item">
												<span className="_key">微信认证：</span>
												<span className={"_value " + (supplier.openid?'ok':'')}>{supplier.openid?'已认证':'未认证'}</span>
											</div>
											<div className="r-item">
												<span className="_key">电话/座机：</span>
												<span className="_value">{supplier.phone + ' / ' + supplier.telephone}</span>
											</div>
											<div className="r-item">
												<span className="_key">邮箱：</span>
												<span className="_value">{supplier.email}</span>
											</div>
											<div className="r-item">
												<span className="_key">QQ：</span>
												<span className="_value">{supplier.qq}</span>
											</div>
											<div className="r-item">
												<span className="_key">微信：</span>
												<span className="_value">{supplier.wechat}</span>
											</div>
											<div className="r-item">
												<span className="_key">地址：</span>
												<span className="_value">{supplier.address}</span>
											</div>
										</div>

									</div>
								</li>;
							})
						}
					</ul>
				</div>
			</li>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function () {
		return {
			provinces: {},
			suppliers: null
		}
	},
	componentDidMount: function (){
		this.__loadBaseInfo();
	},
	__loadBaseInfo: function (){
		zn.http.get('/adinstall/my/suppliers')
			.then(function (data){
				if(data.status==200){
					data = data.result;
					var _provinces = data.provinces,
						_suppliers = data.suppliers;
					_provinces.forEach(function (province, index){
						province.suppliers = [];
						this.state.provinces[province.value] = province;
					}.bind(this));
					_suppliers.forEach(function (supplier, index){
						if(this.state.provinces[supplier.province]){
							this.state.provinces[supplier.province].suppliers.push(supplier);
						}
					}.bind(this));

					this.state.suppliers = _suppliers;
					this.forceUpdate();
				}else {
					this.state.suppliers = [];
					this.forceUpdate();
				}
			}.bind(this), function (){
				zn.notification.error('请求网络失败');
			});
	},
	__renderSuppliers: function (){
		return (
			<ul className="provinces">
				{
					Object.keys(this.state.provinces).map(function (key){
						var province = this.state.provinces[key];
						if(!province.suppliers.length){
							return null;
						}
						return <Province province={province}  />
					}.bind(this))
				}
			</ul>
		);
	},
	render:function(){
		return (
			<div className="adinstall-base-component-my-suppliers" title='我的供应商' >
				{
					this.state.suppliers?(
						this.state.suppliers.length ? this.__renderSuppliers() : <span className="zr-tip">您暂无供应商</span>
					):<zn.react.DataLoader content="正在加载中..." loader="timer" />
				}
			</div>
		);
	}
});
