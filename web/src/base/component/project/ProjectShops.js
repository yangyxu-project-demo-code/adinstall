var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/my/getOwnProjects')
		}
	},
	__onItemRender: function (item){
		return <div className="adinstall-inner">
			<div className="inner-right">
				<div className="r-header">
					<span className="name" onClick={()=>zn.react.session.relativeJump('/my.ownproject.info', { znid: item.zn_id })}>卡号 {item.code}</span>
					<span className="adinstall-tag">{item.brand_id_convert}</span>
					<i data-tooltip="申请修改信息" className="fa fa-edit h-btn" />
				</div>
				<div className="r-item">
					<span className="_key">项目名称：</span>
					<span className="h-tag">{item.zn_title}</span>
				</div>
				<div className="r-item">
					<span className="_key">项目经理：</span>
					<span className="_value">{item.zn_create_user_convert}</span>
				</div>
				<div className="r-item">
					<span className="_key">预计周期：</span>
					<span className="_value">{(item.plan_start_time||'').toString().split(' ')[0]} ~ {(item.plan_end_time||'').toString().split(' ')[0]}</span>
				</div>
				<div className="r-item">
					<span className="_key">创建时间：</span>
					<span className="_value">{item.zn_create_time}</span>
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
