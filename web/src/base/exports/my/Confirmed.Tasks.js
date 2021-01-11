var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<zn.react.Page title='待结算工单' >
				<zn.app.adinstall.OwnConfirmedTasks status={6} />
			</zn.react.Page>
		);
	}
});