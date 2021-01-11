var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallProjectItem'
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: {
					project_id: this.props.request.search.projectId
				}
			}),
			items: [
				{ title: '操作', width: 60, textAlign: 'center' },
				{ title: '名称', name: 'zn_title', width: 250, filter: { type: 'Input', opts: ['like'] } },
				{ title: '状态', name: 'status_convert', width: 80 },
				{ title: '计划开始时间', name: 'plan_start_time', width: 130 },
				{ title: '计划结束时间', name: 'plan_end_time', width: 130 },
				{ title: '开始时间', name: 'start_time', width: 130 },
				{ title: '结束时间', name: 'end_time', width: 130 },
				{ title: '介绍', name: 'comment', width: 130 },
				{ title: '说明', name: 'zn_note' }
			],
			formItems: [
				{ title: '计划开始时间', name: 'plan_start_time', type: 'Date' },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加工单', name: 'brand.project.task.add', icon: 'fa-plus' }
			]
		}
	},
	__onAction: function (item, data){
		switch (item.name) {
			case 'brand.project.task.delete':
				zn.plugin.admin.model.dialogDelete(this.props.model, { id: data.id }, ()=>this.state.data.refresh());
				break;
			case 'brand.project.task.add':
				zn.plugin.admin.model.dialogInsert({
					model: this.props.model,
					formItems: this.state.formItems,
					hiddens: { project_id: this.props.request.search.projectId },
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.project.task.update':
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
								{ tooltip:'编辑', name: 'brand.project.update', icon: 'fa-edit' }
							]}
							onClick={(value)=>this.__onAction(value, data)} />;
			case 1:
				return <a style={{textDecoration:'underline', display: 'flex', alignItems: 'center'}} href={zn.react.session.relativeURL('/brand.info', { id: data.id })} >
					<img style={{width: 16, height:16, marginRight: 5}} src={zn.http.fixURL(data.logo)} />
					<span>{value}</span>
				</a>;
		}
	},
	render:function(){
		return (
			<zn.react.Page title={'[ '+(this.props.request.search.title||'') + ' ] 工单管理'} toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onAction} >
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
