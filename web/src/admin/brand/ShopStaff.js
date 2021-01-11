var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallBrandShopStaff'
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: {
					shop_id: this.props.request.search.shopId
				}
			}),
			items: [
				{ title: '操作', width: 60, textAlign: 'center' },
				{ title: 'OpenID', name: 'openid', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '名字', name: 'name', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '手机号', name: 'phone', width: 130 },
				{ title: '性别', name: 'sex', width: 60 },
				{ title: 'QQ', name: 'qq', width: 100 },
				{ title: '微信', name: 'wechat', width: 100, filter: { type: 'Input', opts: ['like'] } },
				{ title: '职位', name: 'job_title', width: 180, filter: { type: 'Input', opts: ['like'] } },
				{ title: '状态', name: 'status', width: 100, filter: { type: 'Input', opts: ['like'] } },
				{ title: '说明', name: 'zn_note' }
			],
			formItems: [
				{ title: '名字', name: 'name', type: 'Input' },
				{ title: '手机', name: 'phone', type: 'Input' },
				{ title: '性别', name: 'sex', type: 'Input' },
				{ title: 'QQ', name: 'qq', type: 'Input' },
				{ title: '微信', name: 'wechat', type: 'Input' },
				{ title: '职位', name: 'job_title', type: 'Input' },
				{ title: '状态', name: 'status', type: 'Select', data: [{text:'在职', value: 0}, {text:'离职', value: -1}] },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加店员', name: 'brand.shop.staff.add', icon: 'fa-plus' }
			]
		}
	},
	__onAction: function (item, data){
		switch (item.name) {
			case 'brand.shop.staff.delete':
				zn.plugin.admin.model.dialogDelete(this.props.model, { id: data.id }, ()=>this.state.data.refresh());
				break;
			case 'brand.shop.staff.add':
				zn.plugin.admin.model.dialogInsert({
					model: this.props.model,
					formItems: this.state.formItems,
					hiddens: { shop_id: this.props.request.search.shopId },
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.shop.staff.update':
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
								{ tooltip:'删除', name: 'brand.shop.staff.delete', icon: 'fa-remove' },
								{ tooltip:'编辑', name: 'brand.shop.staff.update', icon: 'fa-edit' }
							]}
							onClick={(value)=>this.__onAction(value, data)} />;
			default:
				return <span data-tooltip={value}>{value}</span>;
		}
	},
	render:function(){
		return (
			<zn.react.Page title={'[ '+(this.props.request.search.title||'') + ' ] 门店店员管理'} toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onAction} >
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
