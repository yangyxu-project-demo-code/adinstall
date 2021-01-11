var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallUser'
		};
	},
	getInitialState: function () {
		this.city_data = zn.store.post('/zn.plugin.admin/var/getByPid', { pid: -1 });
		this.var_data = zn.store.post('/zn.plugin.admin/var/getByPid', { pid: -1 });
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model
			}),
			items: [
				{ title: '操作', width: 80, textAlign: 'center' },
				{ title: '状态', name: 'status_convert', width: 100 },
				{ title: '工种', name: 'work_type_convert', width: 100, filter: { type: 'SearchMenu', data: zn.store.post('/znadmin/var/getByPid', { pid: 25 }), opts: ['='] } },
				{ title: '用户名', name: 'name', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '邮箱', name: 'email', width: 150, filter: { type: 'Input', opts: ['like'] } },
				{ title: '手机号', name: 'phone', width: 110, filter: { type: 'Input', opts: ['like'] } },
				{ title: '年龄', name: 'age', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '性别', name: 'sex', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '区域', name: 'region_convert', width: 80 },
				{ title: '省', name: 'province_convert', width: 80 },
				{ title: '城市', name: 'city_convert', width: 80 },
				{ title: '地址', name: 'address', width: 300, filter: { type: 'Input', opts: ['like'] } },
				{ title: '说明', name: 'note' }
			],
			formItems: [
				{ title: '用户名', name: 'name', type: 'Input' },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: '用户状态', name: 'status', type:'Select', required: true, data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 19 }) },
				{
					title: '区域',
					name: 'region',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 44 }),
					onChange: function (data){
						data && this.var_data.extend({ pid: data.value }).exec();
					}.bind(this)
				},
				{
					title: '省',
					name: 'province',
					type: 'Select',
					data: this.var_data,
					onChange: function (data){
						data && this.city_data.extend({ pid: data.value }).exec();
					}.bind(this)
				},
				{
					title: '城市',
					name: 'city',
					type: 'Select',
					data: this.city_data
				},
				{
					title: '工种',
					name: 'workType',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 25 })
				},
				{ title: '年龄', name: 'age', type: 'Input', attrs: { type: 'number', step: 1 } },
				{ title: '性别', name: 'sex', type: 'Radio', data: [{text:'男',value:'男'},{text:'女',value:'女'}] },
				{ title: '手机号', name: 'phone', type: 'Input' },
				{ title: '说明', name: 'note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加', name: 'add', icon: 'fa-plus' }
			]
		}
	},
	__addItem: function (){
		zn.dialog({
			title: '添加用户',
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
			title: '更新用户',
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
	__onRowClick: function (data, icon, event){
		var _data = this.state.data;
		var _self = this;
		switch (data.index) {
			case 0:
				zn.confirm('确定删除该数据吗？','提示', function (){
					zn.http.post('/zn.plugin.admin/model/delete', {
						model: _self.props.model,
						where: {
							id: _data.id
						}
					}).then(function (data){
						zn.toast.success('删除成功！');
						_data.refresh();
					});
				});
				break;
			case 1:
				this.__updateItem(_data);
				break;
		}
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (columnIndex) {
			case 0:
				return <zn.react.Icons
							data={[
								{ tooltip:'删除',  icon: 'fa-remove' },
								{ tooltip:'编辑', icon: 'fa-edit' },
								{ tooltip:'用户订单', icon: 'fa-list' },
							]}
							onClick={(value)=>this.__onRowClick(value, data)} />;
			case 1:
				return <a style={{textDecoration:'underline', display: 'flex', alignItems: 'center'}} href={zn.react.session.relativeURL('/brand.info', { id: data.id })} >
					<img style={{width: 16, height:16, marginRight: 5}} src={zn.http.fixURL(data.logo)} />
					<span>{value}</span>
				</a>;
		}
	},
	render:function(){
		return (
			<zn.react.Page title='执行人员管理' toolbarItems={this.state.toolbarItems} onToolbarClick={this.__onToolbarClick} >
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
