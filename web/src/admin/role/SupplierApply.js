var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallSupplier'
		};
	},
	getInitialState: function () {
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: {
					supplier_type: 1
				}
			}),
			items: [
				{ title: '操作', width: 50, textAlign: 'center' },
				{ title: '姓名', name: 'name', width: 80, filter: { type: 'Input', opts: ['like'] } },
				{ title: '省', name: 'province', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '城市', name: 'city', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '地址', name: 'address', width: 300, filter: { type: 'Input', opts: ['like'] } },
				{ title: '邮箱', name: 'email', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '手机号', name: 'phone', width: 100, filter: { type: 'Input', opts: ['like'] } },
				{ title: '年龄', name: 'age', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '性别', name: 'sex', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '说明', name: 'note' }
			],
			formItems: [
				{ title: '用户名', name: 'name', type: 'Input', required: true },
				{ title: '省', name: 'province', type: 'Input' },
				{ title: '城市', name: 'city', type: 'Input' },
				{ title: '地址', name: 'address', type: 'Textarea' },
				{ title: '年龄', name: 'age', type: 'Input', attrs: { type: 'number', step: 1 } },
				{ title: '性别', name: 'sex', type: 'Radio', data: [{text:'男',value:'男'},{text:'女',value:'女'}] },
				{ title: '手机号', name: 'phone', type: 'Input' },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: '说明', name: 'note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加', name: 'add', icon: 'fa-plus' }
			]
		}
	},
	__addItem: function (){
		zn.dialog({
			title: '添加供应商',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: this.props.model}}
				merge="values"
				onSubmitSuccess={()=>this.state.data.refresh()}
				items={this.state.formItems} />
		});
	},
	__updateItem: function (data){
		zn.dialog({
			title: '更新供应商',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/update'
				exts={{model: this.props.model, where: { id: data.id }}}
				merge="updates"
				value={data}
				onSubmitSuccess={()=>this.state.data.refresh()}
				items={this.state.formItems} />
		});
	},
	__onToolbarClick: function (item){
		switch (item.name) {
			case 'add':
				this.__addItem();
				break;
		}
	},
	__onRowClick: function (value, data, event){
		var _self = this;
		switch (value.index) {
			case 0:
				zn.confirm('确定删除该数据吗？','提示', function (){
					zn.http.post('/zn.plugin.admin/model/delete', {
						model: _self.props.model,
						where: {
							id: data.id
						}
					}).then(function (data){
						zn.toast.success('删除成功！');
						_self.state.data.refresh();
					});
				});
				break;
			case 1:
				this.__updateItem(data);
				break;
		}
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (columnIndex) {
			case 0:
				return <zn.react.Icons
							data={[
								{ tooltip:'删除',  icon: 'fa-remove' },
								{ tooltip:'编辑', icon: 'fa-edit' }
							]}
							onClick={(value)=>this.__onRowClick(value, data)} />;
		}
	},
	render:function(){
		return (
			<zn.react.Page title='内部供应商' toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onToolbarClick} >
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
