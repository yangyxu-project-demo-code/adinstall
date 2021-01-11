var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<zn.react.Page title='区域详情' >
                <zn.app.adinstall.RegionProjectInfo znid={this.props.request.search.zn_id} />
			</zn.react.Page>
		);
	}
});