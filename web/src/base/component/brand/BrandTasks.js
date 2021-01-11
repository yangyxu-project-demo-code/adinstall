var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/brand/getTasks', { znid: this.props.znid })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.znid != this.props.znid){
			this.state.data.extend({
				znid: nextProps.znid
			}).exec();
		}
	},
	__onResolveTask: function (item){
		zn.dialog({
			title: '确认工单',
			content: <zn.react.Form
				style={{padding: 20}}
				action="/adinstall/task/resolve"
				exts={{ code: item.code }}
				items={[
					{title: '备注', name: 'note', type: 'Textarea'}
				]}
				onSubmitSuccess={()=>this.state.data.refresh()}
				buttons={[
					{text: '确认通过', status: 'success', type: 'submit'}
				]} />
		});
	},
	__onRejectTask: function (item){
		zn.dialog({
			title: '驳回工单',
			content: <zn.react.Form
				style={{padding: 20}}
				action="/adinstall/task/reject"
				exts={{ code: item.code }}
				items={[
					{title: '备注', name: 'note', type: 'Textarea'}
				]}
				onSubmitSuccess={()=>this.state.data.refresh()}
				buttons={[
					{text: '驳回', status: 'danger', type: 'submit'}
				]} />
		});
	},
	__onItemRender: function (item){
		return <div className="adinstall-task">
			<zn.app.adinstall.OrderItem data={item} onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', { orderCode: item.code })} />
			{
				item.status==0 && <div className="adinstall-link">
					<span onClick={()=>this.__onRejectTask(item)} className="link danger">驳回</span>
					<span onClick={()=>this.__onResolveTask(item)} className="link ok">确认通过</span>
				</div>
			}
			{
				item.status==5 && <div className="adinstall-link">
					<span onClick={()=>this.__onRejectTask(item)} className="link danger">订单完成确认</span>
				</div>
			}
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" className="adinstall-base-my-own-region-tasks" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
