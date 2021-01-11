var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			data: null
		};
  	},
	componentDidMount: function (){
		this.__loadMenus();
	},
	__loadMenus: function (){
		zn.preloader.open({
			title: '加载中...'
		});
		zn.http.post('/adinstall/admin.user/getRightsMenu', { user_id: zn.react.session.jsonKeyValue("ADINSTALL_ADMIN").id })
			.then(function (data){
				if(data.status==200){
					this.setState({
						data: data.result
					});
				}else {
					zn.toast.error(data.result);
				}
				zn.preloader.close();
			}.bind(this), function (){
				zn.toast.error('网络请求失败');
				zn.preloader.close();
			});
	},
	__onMenuClick: function (item){
		if(item.url){
			zn.react.session.relativeJump(item.url);
		}
	},
	render: function(){
		return (
			<div className="adinstall-index-admin-menu">
				{
					this.state.data && this.state.data.map(function (group, index){
						return <div className="menu-group">
							<div className="group-title"><i className={"fa zr-padding-3 " + group.icon} />{group.zn_title}</div>
							<ul className="group-menus">
								{
									group.children && group.children.map(function (menu){
										return <li className="menu" onClick={()=>this.__onMenuClick(menu)}>
											<i className={"fa zr-padding-3 " + menu.icon} />
											<span>{menu.zn_title}</span>
										</li>;
									}.bind(this))
								}
							</ul>
						</div>
					}.bind(this))
				}
            </div>
		);
	}
});
