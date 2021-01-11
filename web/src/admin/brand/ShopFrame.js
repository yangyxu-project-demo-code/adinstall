var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallBrandShopFrame'
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: {
					brand_shop_id: this.props.request.search.shopId
				}
			}),
			items: [
				{ title: '操作', name: 'action', width: 60, textAlign: 'center' },
				{ title: '状态', name: 'status', width: 100, filter: { type: 'Input', opts: ['like'] } },
				{ title: '名称', name: 'zn_title', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '广告位置', name: 'adv_position', width: 120, filter: { type: 'Input', opts: ['like'] } },
				{ title: '基层', name: 'ji_ceng', width: 150 },
				{ title: '材质', name: 'cai_zhi', width: 150 },
				{ title: '净尺寸宽', name: 'jing_chi_cun_kuang', width: 80 },
				{ title: '净尺寸高', name: 'jing_chi_cun_gao', width: 80 },
				{ title: '出血尺寸宽', name: 'chu_xue_chi_cun_kuang', width: 80 },
				{ title: '出血尺寸高', name: 'chu_xue_chi_cun_gao', width: 80 },
				{ title: '边框尺寸宽', name: 'bian_kuang_chi_cun_kuang', width: 80 },
				{ title: '边框尺寸高', name: 'bian_kuang_chi_cun_gao', width: 80 },
				{ title: '制作方式', name: 'produce_guide', width: 120 },
				{ title: '安装方式', name: 'install_guide', width: 120 },
				{ title: '安装难度', name: 'install_difficulty', width: 120 },
				{ title: '介绍', name: 'comment' }
			],
			formItems: [
				{ title: 'Logo', name: 'logo', type: 'ImageUploader' },
				{ title: '状态', name: 'status', type: 'Select', data: [{text:'正常', value: 0}, {text:'维修中', value: -2}, {text:'已作废', value: -1}] },
				{ title: '名称', name: 'zn_title', type: 'Input' },
				{ title: '广告位置', name: 'adv_position', type: 'Input' },
				{ title: '基层', name: 'ji_ceng', type: 'Input' },
				{ title: '材质', name: 'cai_zhi', type: 'Input'},
				{ title: '净尺寸宽', name: 'jing_chi_cun_kuang', type: 'Input' },
				{ title: '净尺寸高', name: 'jing_chi_cun_gao', type: 'Input' },
				{ title: '出血尺寸宽', name: 'chu_xue_chi_cun_kuang', type: 'Input' },
				{ title: '出血尺寸高', name: 'chu_xue_chi_cun_gao', type: 'Input' },
				{ title: '边框尺寸宽', name: 'bian_kuang_chi_cun_kuang', type: 'Input' },
				{ title: '边框尺寸高', name: 'bian_kuang_chi_cun_gao', type: 'Input' },
				{ title: '制作方式', name: 'produce_guide', type: 'RichEditor' },
				{ title: '安装方式', name: 'install_guide', type: 'RichEditor' },
				{ title: '安装难度', name: 'install_difficulty', type: 'Input' },
				{ title: '安装前', name: 'images', type: 'FileUploader' },
				{ title: '介绍', name: 'comment', type: 'RichEditor' }
			],
			toolbarItems: [
				{ text: '添加广告位', name: 'brand.shop.frame.add', icon: 'fa-plus' }
			]
		}
	},
	__onAction: function (item, data){
		switch (item.name) {
			case 'brand.shop.frame.delete':
				zn.plugin.admin.model.dialogDelete(this.props.model, { id: data.id }, ()=>this.state.data.refresh());
				break;
			case 'brand.shop.frame.add':
				zn.plugin.admin.model.dialogInsert({
					model: this.props.model,
					formItems: this.state.formItems,
					hiddens: { brand_shop_id: this.props.request.search.shopId },
					success: ()=>this.state.data.refresh()
				});
				break;
			case 'brand.shop.frame.update':
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
								{ tooltip:'删除', name: 'brand.shop.frame.delete', icon: 'fa-remove' },
								{ tooltip:'编辑', name: 'brand.shop.frame.update', icon: 'fa-edit' }
							]}
							onClick={(value)=>this.__onAction(value, data)} />;
			case 'status':
				if(value==0){
					return <span style={{color: 'green'}}>正常</span>;
				}
				if(value==-2){
					return <span style={{color: 'yellow'}}>维修中</span>;
				}
				if(value==-1){
					return <span style={{color: 'red'}}>已报修</span>;
				}
		}

		return <span data-tooltip={value}>{value}</span>;
	},
	render:function(){
		return (
			<zn.react.Page title={'[ '+(this.props.request.search.title||'') + ' ] 门店广告位管理'} toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onAction} >
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
