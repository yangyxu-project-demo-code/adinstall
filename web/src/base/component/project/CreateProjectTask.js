var React = require('react');
var Shop = React.createClass({
	getInitialState: function (){
		var _where = { city: this.props.city };
		if(this.props.province == 58){
			_where = {};
		}
		this.suppliers = zn.store.post('/adinstall/var/getRegionSupplier', _where);
		return {
			formItems: [
				{ title: '施工位置', name: 'brand_shop_frame_ids', type: 'CheckboxGroup', data: zn.store.post('/adinstall/var/getShopFrames', { shopId: this.props.value }) },
				{
					title: '施工类型',
					name: 'work_type',
					type: 'Select',
					data: zn.store.post('/zn.plugin.admin/var/getByPid', { pid: 25 }),
					onChange: function (value){
						this.suppliers.extend({work_type:value.value}).refresh()
					}.bind(this)
				},
				{ title: '供应商', name: 'supplier_openid', type: 'Select', data: this.suppliers },
				{ title: '费用', name: 'cost', type: 'Input', attrs: { type: 'number' } },
				{ title: '预计进场时间', name: 'plan_start_time', type: 'Input', attrs: { type: 'date' } },
				{ title: '预计完成时间', name: 'plan_end_time', type: 'Input', attrs: { type: 'date' } },
				{ title: '效果图', name: 'requirement_images', type: 'FileUploader' },
				{ title: '附件', name: 'attachments', type: 'FileUploader' },
				{ title: '说明', name: 'comment', type: 'Textarea' }
			],
			value: null
		}
	},
	__onFormSubmitBefore: function (data){
		//console.log(data);
		return false;
	},
	getValue: function (){

		var _value = this.refs.form.validate()||{};
		_value.brand_shop_id = this.props.value;
		_value.zn_rights_owner_id = this.props.zn_rights_owner_id;
		if(!_value.work_type){
			return null;
		}
		return _value;
		if(_value.supplier_openid && _value.work_type){
			return _value;
		}
		return null;
	},
	render: function (){
		//{ text: '保存表单', icon: 'fa-save', type: 'submit', status: 'primary' }
		return (
			<div className="shop">
				<zn.react.Group title={this.props.text} style={{margin: 10, backgroundColor: '#FFF'}}>
					<zn.react.Form ref='form' items={this.state.formItems} buttons={[]} onSubmitBefore={this.__onFormSubmitBefore} />
				</zn.react.Group>
			</div>
		);
	}
});

var Province = React.createClass({
	getInitialState: function () {
		return {
			active: this.props.active || false
		}
	},
	getValue: function (){
		var _data = [],
			_value = null;
		for(var key in this.refs){
			_value = this.refs[key].getValue();
			if(_value){
				_data.push(_value);
			}
		}

		return _data;
	},
	render:function(){
		return (
			<div className={"adinstall-admin-create-brand-project-region " + (this.state.active?'active':'')}>
				<div className="header">
					<div>{this.props.zn_title}({this.props.shops.length}个门店)</div>
					<div>
						<i onClick={()=>this.setState({active: !this.state.active})} style={{cursor: 'pointer'}} className={"fa zr-padding-5 "+(this.state.active?'fa-angle-down':'fa-angle-right')} />
					</div>
				</div>
				<div className="content">
					<div className="shops">
						{
							this.props.shops.map(function (shop, index){
								shop.zn_rights_owner_id = this.props.zn_rights_owner_id;
								return <Shop ref={index} {...shop} />;
							}.bind(this))
						}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function () {
		return {
			project: null,
			region_project: null,
			provinces: {}
		}
	},
	componentDidMount: function (){
		this.__loadCreateMeta();
	},
	__loadCreateMeta: function (){
		zn.http.post('/adinstall/project/getCreateProjectTaskMeta', { znid: this.props.znid })
			.then(function (data){
				if(data.status==200){
					this.__parseData(data.result);
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this), function (){
				zn.notification.error("网络请求失败");
			});
	},
	__parseData: function (data){
		var _project = data.project,
			_provinces = data.provinces,
			_shops = data.shops;

		_provinces.forEach(function (province, index){
			province.shops = [];
			this.state.provinces[province.id] = province;
		}.bind(this));
		_shops.forEach(function (shop, index){
			if(this.state.provinces[shop.province]){
				this.state.provinces[shop.province].shops.push(shop);
			}
		}.bind(this));
		this.state.project = _project;
		this.state.region_project = data.region_project;
		this.forceUpdate();
	},
	__onCreate: function (){
		var _tasks = [];
		for(var key in this.refs){
			var _value = this.refs[key].getValue();
			if(_value.length){
				_tasks = _tasks.concat(_value);
			}
		}

		if(!_tasks.length){
			return zn.toast.warning('至少需要选择一个门店');
		}
		zn.confirm('确定创建已选择'+_tasks.length+'个门店工单吗？', '提示', function () {
			zn.http.post('/adinstall/project/createProjectTasks', {
				meta: {
					project_id: this.state.project.id,
					brand_id: this.state.project.brand_id,
					project_region_id: this.state.region_project.id,
					region: this.state.region_project.region
				},
				tasks: _tasks
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('创建成功');
					zn.react.session.relativeJump('/adinstall.base.my.project.region.detail', { zn_id: this.state.region_project.zn_id });
				}else {
					zn.toast.error(data.result);
				}
			}.bind(this), function (data){
				zn.toast.error('请求网络失败: ' + data);
			});
		}.bind(this));
	},
	render:function(){
		if(!this.state.project){
			return <zn.react.DataLoader content="正在加载..." loader="timer" />;
		}
		return (
			<div className="adinstall-admin-create-brand-project">
				<div className="index-title">
					<span>【{this.state.project.brand_id_convert}】{this.state.project.zn_title}</span>
					<span style={{float: 'right'}} className="a-tag">由 {this.state.project.zn_create_user_convert} 于 {this.state.project.zn_create_time} 指派</span>
				</div>
				<zn.react.Group className="item-group" title={this.state.project.code} style={{margin: 5, marginTop: 15, padding: 10, backgroundColor: '#ededed'}}>
					<div className="r-item">
						<span className="_key">预计周期：</span>
						<span className="_value">{this.state.project.plan_start_time} ~ {this.state.project.plan_end_time}</span>
					</div>
					<div className="r-item">
						<span className="_key">说明：</span>
						<span className="_value">{this.state.project.comment}</span>
					</div>
					<div className="r-item">
						<span className="_key">附件：</span>
						<zn.react.Files className="_value" value={this.state.project.attachments} />
					</div>
				</zn.react.Group>
				<zn.react.Group className="item-group" title={this.state.region_project.region_convert} style={{margin: 5, marginTop: 15, padding: 10, backgroundColor: '#ededed'}}>
					<div className="r-item">
						<span className="_key">周期：</span>
						<span className="_value">{this.state.region_project.start_time} ~ {this.state.region_project.end_time}</span>
					</div>
					<div className="r-item">
						<span className="_key">说明：</span>
						<span className="_value">{this.state.region_project.comment}</span>
					</div>
					<div className="r-item">
						<span className="_key">附件：</span>
						<zn.react.Files className="_value" value={this.state.region_project.attachments} />
					</div>
					<div className="zr-tip-warning" ><i className="fa fa-info-circle"/>展开可以批量创建项目工单, 也可以创建单个工单.</div>
					{
						Object.keys(this.state.provinces).map(function (key){
							if(this.state.provinces[key].shops.length){
								return <Province ref={key} active={false} {...this.state.provinces[key]} zn_rights_owner_id={this.state.project.zn_rights_owner_id} />;
							}else {
								return null;
							}
						}.bind(this))
					}
					<zn.react.Button status="warning" text="创建项目工单" style={{margin: 5}} onClick={this.__onCreate} />
				</zn.react.Group>
			</div>
		);
	}
});
