var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/my/getOwnProjectRegions', { status: this.props.status })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.status != this.props.status){
			this.state.data.extend({
				status: nextProps.status
			}).exec();
		}
	},
	__onCreateProjectTask: function (item){
		zn.react.session.relativeJump('/adinstall.base.my.brands.create.project.task', { znid: item.zn_id });
	},
	__renderStatus: function (item){
		switch (item.status) {
			case 0:
				return <span onClick={()=>this.__onCreateProjectTask(item)}><i className="fa fa-plus zr-padding-3"/>创建工单</span>;
			case 1:
				return <span style={{color: '#03a9f4', borderColor: '#03a9f4' }}>结算中</span>;
			case 2:
				return <span style={{color: '#green', borderColor: '#green' }}>已完成</span>;
		}
	},
	__onItemRender: function (item){
		return <div className="adinstall-inner">
			<div className="inner-left" style={{width: 80}}>
				<zn.react.ProgressRing style={{margin: '0 auto'}} full={false} value={item.task_count?item.task_finished_count/item.task_count * 100:0} />
				<div className="status">{this.__renderStatus(item)}</div>
			</div>
			<div className="inner-right">
				<div className="r-header">
					<span className="name" onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.project.region.detail', { zn_id: item.zn_id })} data-tooltip="查看项目信息">
						{item.project_code}
					</span>
					<span className="adinstall-tag">{item.brand_id_convert}</span>
				</div>
				<div className="r-item">
					<span className="_key">所属项目：</span>
					<span className="_value">{item.project_id_convert}</span>
				</div>
				<div className="r-item">
					<span className="_key">项目经理：</span>
					<span className="_value">{item.zn_create_user_convert}</span>
				</div>
				<div className="r-item">
					<span className="_key">当前进度：</span>
					<span className="adinstall-tag" data-tooltip={"已确认(" + item.task_finished_count + ") / 工单总量(" + item.task_count + ")"}>{item.task_finished_count} / {item.task_count}</span>
				</div>
				<div className="r-item">
					<span className="_key">指派时间：</span>
					<span className="_value">{item.zn_create_time}</span>
				</div>
				<div className="r-item">
					<span className="_key">预计周期：</span>
					<span className="_value">{(item.start_time||'').toString().split(' ')[0]} ~ {(item.end_time||'').toString().split(' ')[0]}</span>
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
