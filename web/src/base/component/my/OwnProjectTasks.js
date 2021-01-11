var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/my/getOwnProjectTasks', { status: this.props.status })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.status != this.props.status){
			this.state.data.extend({
				status: nextProps.status
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
	__onOwnConfirmTask: function (task){
		zn.confirm('确定确认工单 '+task.code+' 吗, 确认完成将提交给财务审核？','提示', function (){
			zn.http.post('/adinstall/task/ownConfirm', {
				taskCode: task.code
			}).then(function (data){
				if(data.status==200){
					zn.notification.success('确认成功');
					this.state.data.refresh();
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this), function (){
				zn.notification.error('网络请求失败');
			});
		}.bind(this));
	},
	__onOwnRejectTask: function (item){
		zn.dialog({
			title: '驳回工单',
			content: <zn.react.Form
				style={{padding: 20}}
				action="/adinstall/task/ownReject"
				exts={{ taskCode: item.code }}
				items={[
					{ title: '备注', name: 'comment', type: 'Textarea', required: true },
					{ title: '附件', name: 'attachments', type: 'Textarea' }
				]}
				onSubmitSuccess={()=>this.state.data.refresh()}
				buttons={[
					{text: '确认驳回', status: 'danger', type: 'submit'}
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
					<span onClick={()=>this.__onOwnRejectTask(item)} className="link danger">驳回</span>
					<span onClick={()=>this.__onOwnConfirmTask(item)} className="link ok">确认完成</span>
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
