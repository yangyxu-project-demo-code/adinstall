var React = require('react');

module.exports = React.createClass({
    render: function (){
        return (
            <zn.react.Page title='我的供应商'>
				<zn.app.adinstall.MySuppliers />
			</zn.react.Page>
        );
    }
});