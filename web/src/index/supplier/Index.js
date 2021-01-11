var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {

		};
  	},
	getSuggestSupplier: function (){
		zn.http.post('/adinstall/sms/getCode')
			.then(function (data){

			}.bind(this), function (){
				zn.toast.error('请求失败！');
			});
	},
	render: function(){
		return (
			<zn.react.Page title="供应商">
                <div className="adinstall-index-supplier-index">
                    <div className="index-header">
                        <img className="logo" src="./images/logo.png" />
                    </div>
                    <div className="index-body">
                        <div className="btn" onClick={()=>zn.react.session.jump('/supplier.auth')} style={{backgroundColor:'#3498db'}}>供应商认证</div>
                        <div className="btn" style={{backgroundColor:'#3d4245'}} style={{backgroundColor: 'rgb(198, 200, 202)'}} onClick={()=>{zn.toast.warning("系统未开放")}}>供应商申请</div>
                    </div>
                    <div className="index-footer">
                        <div className="copy-right">
                            <a href="http://www.kylinpop.com">上海腾麟文化传媒有限公司 @2016-2017</a>
                        </div>
                    </div>
                </div>
			</zn.react.Page>
		);
	}
});
