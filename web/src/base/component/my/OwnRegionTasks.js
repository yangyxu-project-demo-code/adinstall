var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/my/getCreatedProjectTasks', { status: this.props.status })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.status != this.props.status){
			this.state.data.extend({
				status: nextProps.status
			}).exec();
		}
	},
	__onProjectInfo: function (project){
		zn.react.session.relativeJump('/my.regionproject.info', { znid: project.zn_id });
	},
	__auditRegionProject: function (project, status){
		zn.preloader.open({content: '提交中, 请稍后...'});
		zn.http.post('/adinstall/regionproject/audit', {
			znid: project.zn_id,
			status: status
		}).then(function (data){
			if(data.status==200){
				zn.notification.success('提交成功');
				this.state.data.refresh();
			}else {
				zn.notification.error(data.result);
			}
			zn.preloader.close();
		}.bind(this), function (data){
			zn.notification.error('请求网络失败: ' + data);
			zn.preloader.close();
		});
	},
	__onReEdit: function (item){
		var _where = { city: item.city };
		if(item.province == 58){
			_where = {};
		}
		_where.work_type = item.work_type;
		var _suppliers = zn.store.post('/adinstall/var/getRegionSupplier', _where);
		zn.dialog({
			title: '重新提交工单',
			content: <zn.react.Form
				style={{padding: 20}}
				action="/adinstall/task/reSubmit"
				merge="data"
				exts={{ code: item.code }}
				items={[
					{ title: '施工位置', name: 'brand_shop_frame_ids', type: 'CheckboxGroup', data: zn.store.post('/adinstall/var/getShopFrames', { shopId: item.brand_shop_id }) },
					{
						title: '施工类型',
						name: 'work_type',
						type: 'Select',
						data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 25 }),
						onChange: function (value){
							if(value){
								_suppliers.extend({work_type:value.value}).refresh();
							}
						}.bind(this)
					},
					{ title: '供应商', name: 'supplier_openid', type: 'Select', data: _suppliers },
					{ title: '费用', name: 'cost', type: 'Input', attrs: { type: 'number' } },
					{ title: '预计进场时间', name: 'plan_start_time', type: 'Input', attrs: { type: 'date' } },
					{ title: '预计完成时间', name: 'plan_end_time', type: 'Input', attrs: { type: 'date' } },
					{ title: '效果图', name: 'requirement_images', type: 'FileUploader' },
					{ title: '附件', name: 'attachments', type: 'FileUploader' },
					{ title: '说明', name: 'comment', type: 'Textarea' }
				]}
				value={item}
				onSubmitSuccess={()=>this.state.data.refresh()}
				buttons={[
					{text: '重新提交', status: 'warning', type: 'submit'}
				]} />
		});
	},
	__onAssignTask: function (item){
		var _where = { city: item.city };
		if(item.province == 58){
			_where = {};
		}
		_where.work_type = item.work_type;
		zn.dialog({
			title: '重新指派工单',
			content: <zn.react.Form
				style={{padding: 20}}
				action="/adinstall/task/assign"
				exts={{ code: item.code }}
				items={[
					{ title: '供应商', data: zn.store.post('/adinstall/var/getRegionSupplier', _where), name: 'supplier_openid', type: 'Radio', required: true },
					{ title: '备注', name: 'zn_note', type: 'Textarea' }
				]}
				onSubmitSuccess={()=>this.state.data.refresh()}
				buttons={[
					{text: '指派', status: 'warning', type: 'submit'}
				]} />
		});
	},
	__onDeleteTask: function (task){
		zn.confirm('确定删除工单 '+task.code+' 吗？','提示', function (){
			zn.http.post('/adinstall/project/deleteTask', {
				taskCode: task.code
			}).then(function (data){
				if(data.status==200){
					zn.notification.success('删除成功');
					this.state.data.refresh();
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this), function (){
				zn.notification.error('网络请求失败');
			});
		}.bind(this));
	},
	__onConfirmTask: function (task){
		zn.confirm('确定确认工单 '+task.code+' 吗, 确认完成将提交给项目经理审核？','提示', function (){
			zn.http.post('/adinstall/task/supervisionConfirm', {
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
	__onSupervisionRejectTask: function (item){
		zn.dialog({
			title: '驳回工单',
			content: <zn.react.Form
				style={{padding: 20}}
				action="/adinstall/task/supervisionReject"
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
			<div className="adinstall-link">
				{
					item.status<1 && <span onClick={()=>this.__onDeleteTask(item)} className="link danger"><i className="fa fa-sign-in zr-padding-3 danger" />删除</span>
				}
				{
					item.status==-1 && <span onClick={()=>this.__onReEdit(item)} className="link danger"><i data-tooltip={item.zn_note} className="fa fa-info-circle zr-padding-3" />重新提交</span>
				}
				{
					item.status==-2 && <span onClick={()=>this.__onAssignTask(item)} className="link"><i className="fa fa-sign-in zr-padding-3" />重新指派</span>
				}
				{
					item.status==4 && <div>
						<span onClick={()=>this.__onConfirmTask(item)} className="link"><i className="fa fa-sign-in zr-padding-3 danger" />驳回工单</span>
						<span onClick={()=>this.__onSupervisionRejectTask(item)} className="link"><i className="fa fa-sign-in zr-padding-3 ok" />确认完成</span>
					</div>
				}
			</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" className="adinstall-base-my-own-region-tasks" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
