var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			currIndex: 0,
			brands: null,
			status: [],
			level: [],
			type: []
		}
	},
	componentDidMount: function (){
		this.__loadBaseInfo();
	},
	__loadBaseInfo: function (){
		zn.http.get('/adinstall/my/brands')
			.then(function (data){
				data = data.result;
				this.setState({
					brands: data[0],
					status: data[1],
					level: data[2],
					type: data[3]
				});
			}.bind(this));
	},
	__onCreateBrandProject: function (brand){
		zn.react.session.relativeJump('/adinstall.base.my.brands.create.project', { pcode: brand.type_code });
	},
	__renderBrands: function (){
		var _type = {};
		this.state.type.forEach(function (type, index) {
			type.data = [];
			_type[type.id] = type;
		});
		this.state.brands.forEach(function (brand){
			_type[brand.type].data.push(brand);
		});

		return (
			<div className="catgorys">
				{
					Object.keys(_type).map(function (key){
						var _temp = _type[key];
						if(_temp.data.length){
							return (
								<zn.app.adinstall.GroupPanel left={"【"+_temp.data.length+"】" + _temp.zn_title} >
									<ul className="adinstall-base-grid">
										{
											_temp.data.map(function (_item){
												return <li className="zr-item brand">
													<div className="adinstall-inner">
														<div className="inner-left">
															<img className="logo" src={zn.http.fixURL(_item.logo)} />
														</div>
														<div className="inner-right">
															<div className="r-header">
																<span onClick={()=>zn.react.session.relativeJump('/adinstall.base.common.brand.center', { znid: _item.zn_id })} className="name">{_item.zn_title}</span>
																<i onClick={()=>this.__onCreateBrandProject(_item)} className="fa fa-plus zr-fr adinstall-icon-btn">创建项目</i>
															</div>
															<div className="r-item">
																<i className="fa fa-tag" />
																<span className="adinstall-tag">{_item.status_convert}</span>
																<span className="adinstall-tag">{_item.level_convert}</span>
																<span className="adinstall-tag">编号：{_item.type_code}</span>
															</div>
															<div className="r-item">
																<span><i className="fa fa-user zr-padding-3" />联系人：</span>
																<span className="_value">{_item.contact}</span>
															</div>
															<div className="r-item">
																<span><i className="fa fa-phone zr-padding-3" />电话：</span>
																<span className="_value">{_item.phone}</span>
															</div>
															<div className="r-item">
																<span><i className="fa fa-envelope zr-padding-3" />邮箱：</span>
																<span className="_value">{_item.email}</span>
															</div>
														</div>
													</div>
												</li>;
											}.bind(this))
										}
									</ul>
								</zn.app.adinstall.GroupPanel>
							);
						}
					}.bind(this))
				}
			</div>
		);
	},
	render:function(){
		return (
			<div className="adinstall-base-component-my-brands" >
				{this.state.brands ? this.__renderBrands() : <zn.react.DataLoader content="正在加载中..." loader="timer" />}
			</div>
		);
	}
});
