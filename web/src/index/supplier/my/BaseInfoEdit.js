var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		this.citys = zn.store.post('/adinstall/var/getCitys');
		var _items = [
			{ type: 'Input', name: 'age', attrs: { type: 'number' }, placeholder: '请输入年龄', suffix: '岁', title: '年龄' },
			{ type: 'Input', name: 'telephone', placeholder: '请输入座机', title: '座机' },
			{ type: 'Input', name: 'email', placeholder: '请输入常用邮箱', title: '邮箱' },
			{ type: 'Input', name: 'qq', placeholder: '请输入QQ', title: 'QQ号' },
			{ type: 'Input', name: 'wechat', placeholder: '请输入微信号', title: '微信号' },
			{ type: 'CheckboxGroup', data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 25 }), name: 'work_types', placeholder: '请输入工种', title: '工种(多选)' },
			{ type: 'Input', name: 'work_age', placeholder: '请输入工龄', suffix: '月', title: '工龄' },
			{ type: 'Input', name: 'work_fee', placeholder: '请输入结算费用',  title: '结算费用' },
			{ type: 'Input', name: 'card_id', attrs: { type: 'number' }, title: '身份证号' },
			{ type: 'FileUploader', isImage: true, required: true, name: 'card_attachments', placeholder: '请上传个人身份证正反面图片', title: '身份证正反面' },
			{
				title: '省',
				name: 'province',
				type: 'Select',
				data: zn.store.post('/adinstall/var/getProvinces'),
				onChange: function (data){
					data && this.citys.extend({
						pid: data.value
					}).exec();
				}.bind(this)
			},
			{
				title: '市',
				name: 'city',
				type: 'Select',
				data: this.citys
			},
			{ title: '地址', name: 'address', placeholder: '请输入真实联系地址', type: 'Textarea', required: true }
		];

    	return {
			data: null,
			items: _items
		};
  	},
	componentDidMount: function (){
		this.__loadInfo();
	},
	__loadInfo: function (){
		zn.http.post('/adinstall/supplier/getByOpenId', {
			openid: zn.plugin.wechat.getToken().openid
		}).then(function (data){
			this.setState({
				data: data.result
			});
		}.bind(this));
	},
	__onSubmitBefore: function (data){
		zn.preloader.open({
			content: '提交中...'
		});
		zn.http.post('/adinstall/supplier/updateByOpenId', {
			openid: zn.plugin.wechat.getToken().openid,
			data: data
		}).then(function (data){
			if(data.status==200){
				zn.toast.success('更新成功');
				zn.react.router.back();
			}else {
				zn.toast.error('更新失败');
			}
			zn.preloader.close();
		}.bind(this), function (){
			zn.toast.error('网络请求失败');
			zn.preloader.close();
		});
		return false;
	},
	__renderBody: function (){
		if(this.state.data){
			return <zn.react.Form
				items={this.state.items}
				style={{margin: 10, backgroundColor: '#FFF'}}
				onSubmitBefore={this.__onSubmitBefore}
				buttons = {[
					{ text: '确定更新', icon: 'fa-edit', type: 'submit', status: 'danger' }
				]}
				value={this.state.data} />;
		}else {
			return <zn.react.DataLoader loader="timer" content="加载中..." />;
		}
	},
	render: function(){
		return (
			<zn.react.Page className="adinstall-index-supplier-base-info" title="供应商 - 申请纠错">
				{this.__renderBody()}
			</zn.react.Page>
		);
	}
});
