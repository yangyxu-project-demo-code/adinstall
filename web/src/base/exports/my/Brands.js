var React = require('react');

module.exports = React.createClass({
    render: function (){
        return (
            <zn.react.Page title='我的品牌'>
				<zn.app.adinstall.MyBrands />
			</zn.react.Page>
        );
    }
});