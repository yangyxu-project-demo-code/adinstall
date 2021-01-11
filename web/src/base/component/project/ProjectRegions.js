var React = require('react');
var ProjectRegion = require('./ProjectRegion');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/projectdetail/getRegions', { zn_id: this.props.zn_id })
		}
	},
	__onItemRender: function (item){
		return <ProjectRegion data={item} />
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" viewClassName="adinstall-base" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
