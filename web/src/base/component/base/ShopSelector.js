var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			value: ','
		}
	},
	__onShopClick: function (item, checked){
		if(checked){
			this.state.value = this.state.value.replace(','+item.id+',', ',');
		}else {
			this.state.value = this.state.value + item.id + ',';
		}
		this.forceUpdate();
		this.props.onChange && this.props.onChange(this.state.value);
	},
	checkAll: function (value){
		if(value){
			this.state.value = ',' + this.props.data.map(function (item){
				return item.id;
			}).join(',') + ',';
		}else {
			this.state.value = ',';
		}
		this.forceUpdate();
		this.props.onChange && this.props.onChange(this.state.value);
	},
	getValue: function (){
		return this.state.value;
	},
	render:function(){
		return (
			<div className={zn.react.classname("adinstall-base-component-shop-selector", this.props.className)} style={this.props.style} >
				{
					this.props.data && !!this.props.data.length && <div className="shops">
						{
							this.props.data.map(function (item, index){
								var _checked = this.state.value.indexOf(item.id)!=-1;
								return <div className="shop" data-selected={_checked}>
									<i onClick={()=>this.__onShopClick(item, _checked)} className={"check-icon fa "+(_checked?'fa-check-circle':'fa-check-circle-o')} />
									{
										item.logo && <img className="logo" src={zn.http.fixURL(item.logo)} />
									}
									<div className="infos">
										<div className="name">{item.zn_title}</div>
										<div className="address"><i className="fa fa-map-marker zr-padding-3" />{item.address}</div>
									</div>
								</div>;
							}.bind(this))
						}
					</div>
				}
			</div>
		);
	}
});
