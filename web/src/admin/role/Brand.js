var React = require('react');
module.exports = React.createClass({
	getInitialState: function () {
		return {
			toolbarItems: [
				{ text: '添加类型', name: 'add', icon: 'fa-plus' }
			]
		}
	},
	__doSuccess: function (){
		this.state.data.refresh();
	},
	__addItem: function (pid){
		zn.dialog({
			title: '添加品牌',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: this.props.model}}
				merge="values"
				onSubmitSuccess={this.__doSuccess}
				items={this.state.formItems} />
		});
	},
	__updateItem: function (data){
		zn.dialog({
			title: '更新品牌',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/update'
				exts={{model: this.props.model, where: { id: data.id }}}
				merge="updates"
				value={data}
				onSubmitSuccess={this.__doSuccess}
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
	__onRowActions: function (value, data){
		var _data = this.state.data;
		var _self = this;
		switch (value.item.icon) {
			case 'fa-remove':
				zn.confirm('确定删除该数据吗？','提示', function (){
					zn.http.post('/zn.plugin.admin/model/delete', {
						model: _self.props.model,
						where: {
							id: data.id
						}
					}).then(function (data){
						zn.toast.success('删除成功！');
						_data.refresh();
					});
				});
				break;
			case 'fa-edit':
				this.__updateItem(data);
				break;
		}
	},
	render:function(){
		return (
			<zn.react.Page className="adinstall-role-brand" title='品牌管理' toolbarItems={this.state.toolbarItems} >

			</zn.react.Page>
		);
	}
});
