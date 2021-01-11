var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/my/getOwnProjects', { status: this.props.status })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.status != this.props.status){
			this.state.data.extend({
				status: nextProps.status
			}).refresh();
		}
	},
	__onRemoveItem: function (item){
		var _self = this;
		zn.confirm('删除项目后将无法恢复项目数据, 确认删除么？','提示', function (){
			zn.preloader.open({
				content: '删除中...'
			});
			zn.http.post('/adinstall/project/removeProject', {
				project_znid: item.zn_id
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('删除成功');
					_self.state.data.refresh();
				}else {
					zn.toast.error('删除失败, ' + data.result);
				}
				zn.preloader.close();
			}, function (err){
				zn.toast.error('网络请求失败');
				zn.preloader.close();
			});
		});
	},
	__onItemRender: function (item){
		return <div className="adinstall-inner">
			<div className="inner-right">
				<div className="r-header">
					<span className="name" onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.project.detail', { zn_id: item.zn_id })}>卡号 {item.code}</span>
					<span data-tooltip="删除项目" onClick={()=>this.__onRemoveItem(item)} className="zr-fr adinstall-btn danger"><i className="fa fa-trash zr-padding-3" /></span>
					<span data-tooltip="创建时间" className="zr-fr adinstall-tag">创建于 {item.zn_create_time}</span>
				</div>
				<div className="r-item">
					<span className="_key">所属品牌：</span>
					<span className="adinstall-tag">{item.brand_id_convert}</span>
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
