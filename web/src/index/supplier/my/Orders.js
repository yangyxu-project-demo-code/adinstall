var React = require('react');
var Orders = require('../Orders');

module.exports = React.createClass({
	render: function(){
		return (
			<zn.react.Page className="adinstall-index-supplier-auth" title="我的 - 订单">
				<Orders />
			</zn.react.Page>
		);
	}
});
