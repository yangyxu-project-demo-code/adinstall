var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			brands: []
		};
  	},
	componentDidMount: function (){
		this.getInitData();
	},
	getInitData: function (){
		zn.http.get('/adinstall/brand/getBrands')
			.then(function (data){
				if(data.status==200){
					this.setState({brands: data.result});
				}
			}.bind(this), function (){
				zn.toast.error('请求失败！');
			});
	},
	render: function(){
		return (
			<zn.react.Page title="品牌商">
				<div className="adinstall-index-brand-index">
					<div className="title">已入驻品牌</div>
					<ul className="brands">
						{
							this.state.brands.map(function (brand){
								return <li className="brand">
									<img className="logo" src={zn.http.fixURL(brand.logo)} />
									<span className="title">{brand.zn_title}</span>
								</li>
							})
						}
					</ul>
					<div className="btn" onClick={()=>zn.toast.warning('开发中, 请期待')} style={{backgroundColor:'#f0ad4e'}}>申请入驻</div>
				</div>
			</zn.react.Page>
		);
	}
});
