var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallBrandShop',
			provinces: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: -1 }),
			citys: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: -1 })
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: {
					brand_id: this.props.brandId || this.props.request.search.brandId
				}
			}),
			items: [
				{ title: '操作', width: 80, textAlign: 'center' },
				{ title: '门店名称', name: 'zn_title', width: 280, filter: { type: 'Input', opts: ['like'] } },
				{ title: '区域', name: 'region_convert', width: 100 },
				{ title: '省', name: 'province_convert', width: 100 },
				{ title: '市', name: 'city_convert', width: 100 },
				{ title: '地址', name: 'address', width: 480, filter: { type: 'Input', opts: ['like'] } },
				{ title: '电话', name: 'phone', width: 180, filter: { type: 'Input', opts: ['like'] } },
				{ title: '联系人', name: 'contact', width: 70, filter: { type: 'Input', opts: ['like'] } },
				{ title: '手机号', name: 'phone', width: 180, filter: { type: 'Input', opts: ['like'] } },
				{ title: '邮箱', name: 'email', width: 130, filter: { type: 'Input', opts: ['like'] } },
				{ title: '说明', name: 'zn_note' }
			],
			formItems: [
				{ title: '门店Logo', name: 'logo', type: 'ImageUploader' },
				{ title: '门店名称', name: 'zn_title', type: 'Input' },
				{ title: '门店电话', name: 'phone', type: 'Input' },
				{
					title: '区域',
					name: 'region',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 44 }),
					onChange: function (data, rtlist){
						data && this.props.provinces.extend({ pid: data.value }).exec();
					}.bind(this)
				},
				{
					title: '省',
					name: 'province',
					type: 'Select',
					data: this.props.provinces,
					onChange: function (data, rtlist){
						data && this.props.citys.extend({ pid: data.value }).exec();
					}.bind(this)
				},
				{
					title: '城市',
					name: 'city',
					type: 'Select',
					data: this.props.citys
				},
				{ title: '地址', name: 'address', type: 'Textarea' },
				{ title: '联系人', name: 'contact', type: 'Input' },
				{ title: '联系人手机号', name: 'telephone', type: 'Input' },
				{ title: '联系人邮箱', name: 'email', type: 'Input' },
				{ title: '图片', name: 'images', type: 'FileUploader' },
				{ title: '附件', name: 'attachments', type: 'FileUploader' },
				{ title: '介绍', name: 'comment', type: 'RichEditor' },
				{ title: '说明', name: 'zn_note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加门店', name: 'brand.shop.add', icon: 'fa-plus' }
			]
		}
	},
	__onAction: function (item, data){
		switch (item.name) {
			case 'brand.shop.delete':
				zn.plugin.admin.model.dialogDelete(this.props.model, { id: data.id }, ()=>this.state.data.refresh());
				break;
			case 'brand.shop.add':
				zn.plugin.admin.model.dialogInsert({
					model: this.props.model,
					formItems: this.state.formItems,
					hiddens: { brand_id: this.props.request.search.brandId },
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.shop.update':
				zn.plugin.admin.model.dialogUpdate({
					model: this.props.model,
					value: data,
					where: { id: data.id },
					formItems: this.state.formItems,
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.shop.adv':
				zn.react.session.relativeJump('/brand.shop.frame', { shopId: data.id, title: data.zn_title });
				break;
			case 'brand.shop.staff':
				zn.react.session.relativeJump('/brand.shop.staff', { shopId: data.id, title: data.zn_title });
				break;
		}
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (columnIndex) {
			case 0:
				return <zn.react.Icons
							data={[
								{ tooltip:'删除', name: 'brand.shop.delete', icon: 'fa-remove' },
								{ tooltip:'编辑', name: 'brand.shop.update', icon: 'fa-edit' },
								{ tooltip:'橱窗/广告位', name: 'brand.shop.adv', icon: 'fa-adn' },
								{ tooltip:'认证店员', name: 'brand.shop.staff', icon: 'fa-users' }
							]}
							onClick={(value)=>this.__onAction(value, data)} />;
			case 1:
				return <a style={{textDecoration:'underline', display: 'flex', alignItems: 'center'}} href={zn.react.session.relativeURL('/adinstall.base.common.brand.shop.center', { znid: data.zn_id })} >
					{data.logo && <img style={{width: 16, height:16, marginRight: 5}} src={zn.http.fixURL(data.logo)} />}
					<span>{value}</span>
				</a>;
			default:
				return <span data-tooltip={value}>{value}</span>;
		}
	},
	render:function(){
		return (
			<zn.react.Page
				title="门店管理"
				canBack={!this.props.brandId}
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="type"
					onClick={this.__onTabChange}
					value={this.state.type}
					data={[
						{ type: 0, icon: 'fa-list-ul', text: '列表模式' },
						{ type: 1, icon:'fa-map-marker', text: '地图模式' }
					]}/>}
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onAction} >
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
