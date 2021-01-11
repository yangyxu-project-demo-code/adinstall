var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/brand/getProjects', { znid: this.props.znid })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.znid != this.props.znid){
			this.state.data.extend({
				znid: nextProps.znid
			}).refresh();
		}
	},
	__onItemRender: function (item){
		return <div className="adinstall-inner">
			<div className="inner-right">
				<div className="r-header">
					<span className="name" onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.project.detail', { zn_id: item.zn_id })}>卡号 {item.code}</span>
					<span data-tooltip="创建时间" className="zr-fr adinstall-tag">{item.zn_create_time}</span>
				</div>
				<div className="r-item">
					<span className="_key">项目名称：</span>
					<span className="_value">{item.zn_title}</span>
				</div>
				<div className="r-item">
					<span className="_key">项目经理：</span>
					<span className="_value">{item.zn_create_user_convert}</span>
				</div>
				<div className="r-item">
					<span className="_key">预计周期：</span>
					<span className="_value">{(item.plan_start_time||'').toString().split(' ')[0]} ~ {(item.plan_end_time||'').toString().split(' ')[0]}</span>
				</div>
			</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
