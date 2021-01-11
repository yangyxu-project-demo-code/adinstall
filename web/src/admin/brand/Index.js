var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallBrand',
			provinces: zn.store.get('/adinstall/var/getProvinces'),
			citys: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: -1 })
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model
			}),
			items: [
				{ title: '操作', name: 'action', width: 80, textAlign: 'center' },
				{ title: '品牌名称', name: 'zn_title', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '状态', name: 'status_convert', width: 80 },
				{ title: '等级', name: 'level_convert', width: 80 },
				{ title: '类型', name: 'type_convert', width: 80 },
				{ title: '类型编号', name: 'type_code', width: 80 },
				{ title: '所属人', name: 'zn_rights_owner_id_convert', width: 80 },
				{ title: '联系人', name: 'contact', width: 100, filter: { type: 'Input', opts: ['like'] } },
				{ title: '联系电话', name: 'phone', width: 100, filter: { type: 'Input', opts: ['like'] }},
				{ title: '邮箱', name: 'email', width: 130, filter: { type: 'Input', opts: ['like'] } },
				{ title: '省', name: 'province_convert', width: 60 },
				{ title: '市', name: 'city_convert', width: 60 },
				{ title: '地址', name: 'address', width: 300, filter: { type: 'Input', opts: ['like'] } },
				{ title: '创建时间', name: 'zn_create_time', width: 130 },
				{ title: '描述', name: 'comment' }
			],
			formItems: [
				{ title: 'Logo', name: 'logo', type: 'ImageUploader' },
				{ title: '名称', name: 'zn_title', type: 'Input' },
				{
					title: '所属人',
					name: 'zn_rights_owner_id',
					type: 'Select',
					required: true,
					data: zn.store.get('/zn.plugin.admin/role/getRoleUsers?role=16')
				},
				{ title: '类型编号', name: 'type_code', type: 'Input' },
				{
					title: '类型',
					name: 'type',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 637 })
				},
				{
					title: '状态',
					name: 'status',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 635 })
				},
				{
					title: '级别',
					name: 'level',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 636 })
				},
				{
					title: '广告位类型',
					name: 'adv_type_ids',
					type: 'CheckboxGroup',
					valueKey: 'value',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 633 })
				},
				{
					title: '省',
					name: 'province',
					type: 'Select',
					data: this.props.provinces,
					onChange: (data)=> (data && this.props.citys.extend({ pid: data.value }).exec())
				},
				{
					title: '城市',
					name: 'city',
					type: 'Select',
					data: this.props.citys
				},
				{ title: '地址', name: 'address', type: 'Textarea' },
				{ title: '联系人', name: 'contact', type: 'Input' },
				{ title: '电话', name: 'phone', type: 'Input' },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: '附件', name: 'attachments', type: 'FileUploader' },
				{ title: '介绍', name: 'comment', type: 'RichEditor' },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加', name: 'brand.add', icon: 'fa-plus' }
			]
		}
	},
	__onAction: function (item, data){
		if(item.url){
			return zn.react.session.relativeJump(item.url, { brandId: data.id, title: data.zn_title });
		}
		switch (item.name) {
			case 'brand.delete':
				zn.plugin.admin.model.dialogDelete(this.props.model, { id: data.id }, ()=>this.state.data.refresh());
				break;
			case 'brand.add':
				zn.plugin.admin.model.dialogInsert({
					model: this.props.model,
					formItems: this.state.formItems,
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.update':
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
		switch (item.name) {
			case 'action':
				return <zn.react.Icons
							data={[
								{ tooltip:'删除', name: 'brand.delete', icon: 'fa-remove' },
								{ tooltip:'编辑', name: 'brand.update', icon: 'fa-edit' },
								{ tooltip:'门店管理', url: '/brand.shop', icon: 'fa-map-marker' },
								{ tooltip:'项目管理', url: '/brand.project', icon: 'fa-product-hunt' }
							]}
							onClick={(value)=>this.__onAction(value, data)} />;
			case 'zn_title':
				return <a style={{textDecoration:'underline', display: 'flex', alignItems: 'center'}} href={zn.react.session.relativeURL('/adinstall.base.common.brand.center', { znid: data.zn_id })} >
					{data.logo && <img style={{width: 16, height:16, marginRight: 5}} src={zn.http.fixURL(data.logo)} />}
					<span>{value}</span>
				</a>;
		}
	},
	render:function(){
		return (
			<zn.react.Page title='品牌管理' toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onAction} >
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
