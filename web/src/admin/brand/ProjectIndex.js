var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallProject'
		};
	},
	getInitialState: function () {
		var _where = {};
		if(this.props.brandId){
			_where.brand_id = this.props.brandId;
		} else if(this.props.request.search.brandId){
			_where.brand_id = this.props.request.search.brandId;
		}
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: _where
			}),
			items: [
				{ title: '操作', width: 60, textAlign: 'center' },
				{ title: '状态', name: 'status_convert', width: 80 },
				{ title: '名称', name: 'zn_title', width: 250, filter: { type: 'Input', opts: ['like'] } },
				{ title: '品牌', name: 'brand_id_convert', width: 130 },
				{ title: '进度', name: 'progress', width: 130 },
				{ title: '工单完成状态', name: 'task_count', width: 130 },
				{ title: '负责人', name: 'zn_rights_owner_id_convert', width: 130 },
				{ title: '计划开始时间', name: 'plan_start_time', width: 130 },
				{ title: '计划结束时间', name: 'plan_end_time', width: 130 },
				{ title: '创建时间', name: 'zn_create_time', width: 130 },
				{ title: '介绍', name: 'comment' },
				{ title: '说明', name: 'zn_note' }
			],
			formItems: [
				{ title: '名称', name: 'zn_title', type: 'Input' },
				{ title: '计划开始时间', name: 'plan_start_time', type: 'Input', attrs: { type: 'date' } },
				{ title: '计划结束时间', name: 'plan_end_time', type: 'Input', attrs: { type: 'date' } },
				{ title: '负责人', name: 'zn_rights_owner_id', type: zn.plugin.admin.UserSelector, mulitable: false },
				{ title: '附件', name: 'attachments', type: 'FileUploader' },
				{ title: '介绍', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				//{ text: '添加', name: 'brand.project.add', icon: 'fa-plus' }
			]
		}
	},
	__onAction: function (item, data){
		if(item.url){
			return zn.react.session.relativeJump(item.url, { projectId: data.id, title: data.zn_title });
		}
		switch (item.name) {
			case 'brand.project.delete':
				zn.plugin.admin.model.dialogDelete(this.props.model, { id: data.id }, ()=>this.state.data.refresh());
				break;
			case 'brand.project.add':
				zn.plugin.admin.model.dialogInsert({
					model: this.props.model,
					formItems: this.state.formItems,
					hiddens: { brand_id: this.props.request.search.brandId },
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.project.update':
				zn.plugin.admin.model.dialogUpdate({
					model: this.props.model,
					value: data,
					where: { id: data.id },
					formItems: this.state.formItems,
					success: ()=>this.state.data.refresh()
				});
				break;
		}
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (columnIndex) {
			case 0:
				return <zn.react.Icons
							data={[
								{ tooltip:'删除', name: 'brand.project.delete', icon: 'fa-remove' },
								{ tooltip:'编辑', name: 'brand.project.update', icon: 'fa-edit' },
								{ tooltip:'工单列表', url: '/brand.project.task', icon: 'fa-th-list' }
							]}
							onClick={(value)=>this.__onAction(value, data)} />;
			case 2:
				return <a style={{textDecoration:'underline', display: 'flex', alignItems: 'center'}} href={zn.react.session.relativeURL('/my.ownproject.info', { znid: data.zn_id })} >
					<span>{value}</span>
				</a>;
			case 4:
				return <div>
					{data.task_count?<span>{(data.task_finished_count/data.task_count).toFixed(2)+'%'}+</span>: '0'}
				</div>;
			case 5:
				return <div>
					<span>{data.task_finished_count}</span>{'/'}<span>{data.task_count}</span>
				</div>;
		}
	},
	render:function(){
		var _brandId = this.props.brandId || this.props.request.search.brandId;
		if(!_brandId){
			this.state.toolbarItems = [];
		}
		return (
			<zn.react.Page canBack={!this.props.brandId} title='项目管理' toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onAction} >
				<zn.react.PagerView
					view="Table"
					enableFilter={true}
					checkbox={0}
					showHeader={true}
					data={this.state.data}
					columnRender={this.__onTableColumnRender}
					items={this.state.items}/>
			</zn.react.Page>
		);
	}
});
