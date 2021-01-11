var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<zn.react.Page title='订单详情' className="adinstall-list-view-page" >
                <zn.app.adinstall.OwnRegionTaskInfo orderCode={this.props.request.search.orderCode} />
			</zn.react.Page>
		);
	}
});