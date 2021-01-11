var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<zn.react.Page title='创建项目工单' >
				<zn.app.adinstall.CreateProjectTask znid={this.props.request.search.znid} />
			</zn.react.Page>
		);
	}
});