var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			model: 'AdinstallSupplier',
			supplierType: 0
		};
	},
	getInitialState: function () {
		this.citys = zn.store.post('/adinstall/var/getCitys');
		return {
			data: zn.store.post('/zn.plugin.admin/model/paging', {
				model: this.props.model,
				where: {
					supplier_type: this.props.supplierType
				}
			}),
			supplierType: this.props.supplierType,
			items: [
				{ title: '操作', width: 60, name: 'action', textAlign: 'center' },
				{ title: '姓名', name: 'name', width: 200, filter: { type: 'Input', opts: ['like'] } },
				{ title: '等级', name: 'level', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '状态', name: 'status', width: 80 },
				{ title: '绑定微信', name: 'openid', width: 90 },
				{ title: '工种', name: 'work_types_convert', width: 200 },
				{ title: '工龄(月)', name: 'work_age', width: 80 },
				{ title: '省', name: 'province', convert: 'province_convert', width: 100, filter: { type: 'Select', opts: ['='], data: zn.store.post('/adinstall/var/getProvinces') } },
				{ title: '城市', name: 'city_convert', width: 100, filter: { type: 'Select', opts: ['equal'] } },
				{ title: '地址', name: 'address', width: 480, filter: { type: 'Input', opts: ['like'] } },
				{ title: '手机号', name: 'phone', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '座机', name: 'telephone', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: 'QQ号', name: 'qq', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '微信号', name: 'wechat', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '邮箱', name: 'email', width: 140, filter: { type: 'Input', opts: ['like'] } },
				{ title: '年龄', name: 'age', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '性别', name: 'sex', width: 60, filter: { type: 'Input', opts: ['like'] } },
				{ title: '说明', name: 'note' }
			],
			formItems: [
				{ title: '头像', name: 'avatar', type: 'ImageUploader' },
				{ title: '姓名', name: 'name', type: 'Input', required: true },
				{ title: '级别', name: 'level', type: 'Input' },
				{ title: '状态', name: 'status', type: 'Radio', data: [{text:'正常',value:1},{text:'锁定',value:'-1'}] },
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
				{ title: '地址', name: 'address', type: 'Textarea' },
				{ title: '手机号', name: 'phone', type: 'Input' },
				{ title: '座机', name: 'telephone', type: 'Input' },
				{ title: 'QQ号', name: 'qq', type: 'Input' },
				{ title: '微信号', name: 'wechat', type: 'Input' },
				{ title: '邮箱', name: 'email', type: 'Input' },
				{ title: '年龄', name: 'age', type: 'Input', attrs: { type: 'number', step: 1 } },
				{ title: '性别', name: 'sex', type: 'Radio', data: [{text:'男',value:'男'},{text:'女',value:'女'}] },
				{ title: '说明', name: 'note', type: 'Textarea' }
			],
			toolbarItems: [
				{ text: '添加', name: 'add', icon: 'fa-plus' },
				{
					text: <zn.react.AjaxUploader
						action="/adinstall/supplier/importSystemSupplier"
						onComplete={this.__onImportDataComplete}
						hiddens={{
							vars: {
								0: 'zn_title',
								1: 'model',
								2: 'specification',
								3: 'net_weight',
								4: 'gross_weight',
								5: 'package_size',
								6: 'volume',
								7: 'purchase_price'
							}
						}} >
						<i className="fa fa-upload zr-padding-3" />导入内部供应商
					</zn.react.AjaxUploader>
				}
			]
		}
	},
	__onImportDataComplete: function (){
		zn.notification.success('导入数据成功');
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
			case 2:
				zn.react.session.relativeJump('/role.supplier.info', {});
				break;
		}
	},
	__viewWechatUserInfo: function (value){
		zn.dialog({
			title: 'OPENID: ' + value,
			content: <zn.plugin.wechat.UserInfo openid={value} />
		});
	},
	__onActiveUser: function (data, type, btn){
		zn.modal.close();
		zn.preloader.open({
			title: '请求中...'
		});
		zn.http.post('/zn.plugin.admin/user/active', {
			type: type,
			znid: data.zn_id
		}).then(function (data){
			if(data.status==200){
				zn.notification.success("发送成功");
				if(type=='sms'){
					this.state.data.refresh();
				}
			}else {
				zn.notification.error("激活失败：" + data.result);
			}
			zn.preloader.close();
		}.bind(this), function (){
			zn.notification.error('网络请求失败');
			zn.preloader.close();
		});
	},
	__onActive: function (data){
		zn.dialog({
			title: "激活用户: " + data.name,
			content: <div style={{padding: 20}}>
				<zn.react.Button onClick={(props, btn)=>this.__onActiveUser(data, 'sms', btn)} text="手机短信激活" icon="fa-phone zr-padding-3" tooltip="系统直接以短信方式发送账号密码到手机上" />
				<zn.react.Button onClick={(props, btn)=>this.__onActiveUser(data, 'email', btn)} text="邮箱激活" icon="fa-envelope zr-padding-3" tooltip="系统直接以邮件方式发送激活链接到邮箱中" status="warning" style={{ marginTop: 20 }} />
			</div>
		});
	},
	__onTableColumnRender: function (rowIndex, columnIndex, data, item, value){
		switch (item.name) {
			case 'action':
				return <zn.react.Icons
							data={[
								{ tooltip:'删除',  icon: 'fa-remove' },
								{ tooltip:'编辑', icon: 'fa-edit' }
							]}
							onClick={(value)=>this.__onRowClick(value, data)} />;
			case 'status':
				switch (value) {
					case 0:
						return <span style={{color: '#1d18184d'}}><i onClick={()=>this.__onActive(data)} data-tooltip="发送短信" className="fa fa-envelope zr-padding-3" />待激活</span>;
					case 1:
						return <span style={{color: '#008000'}}>正常</span>;
					case -1:
						return <span style={{color: '#d9534f'}}>已锁定</span>;
				}
			case 'name':
				return <div style={{ display: 'flex', alignItems: 'center' }}>
					{data.avatar && <img className="avatar" style={{ width: 16, height: 16, margin: 5, borderRadius: 16 }} src={data.avatar} />}
					<a href={'#'+zn.react.session.fixPath('/role.supplier.center')+'?znid=' + data.zn_id}>{value}</a>
					{data.type==0?<span style={{fontSize: 8, padding: 1, borderRadius: 2, lineHeight:'10px', margin: 2, color: '#FFF', backgroundColor: '#f0ad4e'}}>个人</span>:<span style={{fontSize: 8, padding: 1, borderRadius: 2, lineHeight:'10px', margin: 2, color: '#FFF', backgroundColor: '#d9534f'}}>企业</span>}
				</div>;
			case 'openid':
				if(value){
					return <a onClick={()=>this.__viewWechatUserInfo(value)} data-tooltip="查看微信信息" style={{color: 'green', fontWeight: 'bold'}}><i className="fa fa-eye zr-padding-3" />已绑定</a>;
				}else {
					return <span>未绑定</span>;
				}
		}
	},
	__onTypeChange: function (value){
		this.setState({ supplierType: value.item.type });
		this.state.data._data.where.supplier_type = value.item.type;
		this.state.data.refresh();
	},
	render:function(){
		return (
			<zn.react.Page title='供应商'
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="type"
					onClick={this.__onTypeChange}
					value={this.state.supplierType}
					data={[
						{ type: 0, text: '系统供应商' },
						{ type: 1, text: '平台供应商' }
					]} />}
				toolbarItems={this.state.toolbarItems}
				onToolbarClick={this.__onToolbarClick} >
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
