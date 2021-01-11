var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {

		};
  	},
	render: function(){
		return (
			<div className="adinstall-index-guest-home">
				<div className="kylin">
					<img className="logo" src="./images/logo.png" />
					<span className="title">腾麟云装</span>
				</div>
				<div className="entry">
					<div className="auth">
						<div onClick={()=>zn.react.session.jump('/supplier.index')} className="entry-btn"><i className="fa fa-user-md zr-padding-5" />供应商</div>
						<div onClick={()=>zn.react.session.jump('/brand.index')} className="entry-btn"><i className="fa fa-bitcoin zr-padding-5" />品牌商</div>
					</div>
				</div>
				<div className="footer">
					<span>上海腾麟文化传媒有限公司 @2018</span>
				</div>
			</div>
		);
	}
});
