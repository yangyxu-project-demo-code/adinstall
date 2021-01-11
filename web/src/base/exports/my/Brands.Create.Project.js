var React = require('react');

module.exports = React.createClass({
    render: function (){
        return (
            <zn.react.Page title='创建项目'>
				<zn.app.adinstall.CreateBrandProject brandCode={this.props.request.search.pcode} />
			</zn.react.Page>
        );
    }
});