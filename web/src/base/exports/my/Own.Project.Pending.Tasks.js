var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            status: 100
        }
    },
	render:function(){
		return (
			<zn.react.Page title='待审核工单' className="adinstall-list-view-page" >
                <zn.app.adinstall.OwnProjectTasks status={0} />
			</zn.react.Page>
		);
	}
});