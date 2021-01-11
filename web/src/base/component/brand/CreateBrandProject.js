var React = require('react');
var Region = React.createClass({
	getInitialState: function (){
		return {
			value: ','
		}
	},
	getValue: function (){
		var _shops = this.refs.brand_shop_ids.getValue();
		if(_shops.length>2){
			var _value = {
				zn_id: zn.uuid(),
				brand_id: this.props.brandId,
				region: this.props.id,
				zn_rights_owner_id: this.props.zn_rights_owner_id,
				brand_shop_ids: _shops,
				attachments: this.refs.attachments.validate(),
				comment: this.refs.comment.validate()
			};

			if(this.refs.start_time.validate()){
				_value.start_time = this.refs.start_time.validate();
			}

			if(this.refs.end_time.validate()){
				_value.end_time = this.refs.end_time.validate();
			}

			return _value;
		}
	},
	__onCBGChange: function (value){
		this.setState({value: value});
	},
	render:function(){
		var _count = this.state.value.split(',').length - 2;
		return (
			<zn.app.adinstall.GroupPanel left={<span>【{this.props.shops.length}】{this.props.zn_rights_owner_id_convert}/{this.props.zn_title}</span>}
				right={!!_count?<span className="a-tag" style={{backgroundColor: 'green'}}>已选择 {_count} 家门店</span>:<span className="a-tag">未选择门店</span>}>
				{
					!!this.props.shops.length ? <div className="content" style={{ padding: 10 }}>
						<zn.react.Checkbox style={{backgroundColor: '#f3f1f1'}} onChange={(event, value)=>this.refs.brand_shop_ids.checkAll(value)} text="选择全部门店" />
						<zn.app.adinstall.ShopSelector onChange={this.__onCBGChange} ref="brand_shop_ids" data={this.props.shops} />
						<zn.react.Group title="区域详情" style={{margin: '20px 0px', backgroundColor: '#FFF'}}>
							<zn.react.FormItem ref="start_time" type="Input" name="plan_start_time" attrs={{type:'date'}} title="开始时间" />
							<zn.react.FormItem ref="end_time" type="Input" name="plan_end_time" attrs={{type:'date'}} title="结束时间" />
							<zn.react.FormItem ref="attachments" type="FileUploader" name="attachments" title="附件" />
							<zn.react.FormItem ref="comment" type="Textarea" name="comment" title="说明" />
						</zn.react.Group>
					</div> : <div style={{ textAlign: 'center', padding: 10 }}>暂无门店列表</div>
				}
			</zn.app.adinstall.GroupPanel>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function () {
		return {
			brand: null,
			regions: {},
			data: {},
			projectRegions: []
		}
	},
	componentDidMount: function (){
		this.__loadCreateMeta();
	},
	__loadCreateMeta: function (){
		zn.preloader.open({
			content: '加载中...'
		});
		zn.http.post('/adinstall/brand/getCreateProjectMeta', {
			brandCode: this.props.brandCode
		}).then(function (data){
			if(data.status==200){
				this.__parseData(data.result);
			}else {
				zn.notification.error(data.result);
			}
			zn.preloader.close();
		}.bind(this), function (){
			zn.notification.error("网络请求失败");
			zn.preloader.close();
		});
	},
	__parseData: function (data){
		var _brand = data[0][0],
			_regions = data[1],
			_shops = data[2];

		_regions.forEach(function (region, index){
			region.shops = [];
			this.state.regions[region.id] = region;
		}.bind(this));
		_shops.forEach(function (shop, index){
			if(this.state.regions[shop.region]){
				this.state.regions[shop.region].shops.push(shop);
			}
		}.bind(this));
		this.state.brand = _brand;
		this.state.data.zn_id = zn.uuid();
		this.state.data.brand_id = _brand.id;
		this.state.data.zn_rights_owner_id = _brand.zn_rights_owner_id;
		this.state.data.code = _brand.type_code + '-' + zn.date.nowDateString() + '-' + zn.util.getRandomNumbers();
		this.forceUpdate();
	},
	__onCreate: function (){
		this.state.projectRegions = [];
		for(var key in this.refs){
			if(!isNaN(+key)){
				var _value = this.refs[key].getValue();
				if(_value){
					_value.project_code = this.state.data.code;
					this.state.projectRegions.push(_value);
				}
			}else {
				var _value = this.refs[key].validate();
				if(_value===false){
					return false;
				}
				if(_value){
					this.state.data[key] = this.refs[key].validate();
				}
			}
		}

		if(!this.state.projectRegions.length){
			return zn.toast.warning('至少需要选择一个区域');
		}

		zn.confirm('确定创建该项目吗？', '提示', function () {
			zn.preloader.open({content: '创建中, 请稍后...'});
			zn.http.post('/adinstall/brand/createProject', {
				meta: this.state.data,
				regions: this.state.projectRegions
			}).then(function (data){
				if(data.status==200){
					zn.notification.success('创建成功');
					zn.react.session.relativeJump('/adinstall.base.my.project.detail', { zn_id: this.state.data.zn_id });
				}else {
					zn.notification.error(data.result);
				}
				zn.preloader.close();
			}.bind(this), function (data){
				zn.notification.error('请求网络失败: ' + data);
				zn.preloader.close();
			});
		}.bind(this));
	},
	render:function(){
		if(!this.state.brand){
			return <zn.react.DataLoader content="正在加载..." loader="timer" />
		}
		return (
			<div className="adinstall-admin-create-brand-project">
				<div className="index-title">
					<span>{this.state.brand.zn_title}</span>
					<span data-tooltip="项目卡号"> {this.state.data.code}</span>
				</div>
				<zn.react.Group title="项目详情" style={{margin: '10px 5px', backgroundColor: '#FFF'}}>
					<zn.react.FormItem required={true} ref="zn_title" type="Input" name="zn_title" title="名称"/>
					<zn.react.FormItem required={true} ref="plan_start_time" type="Input" name="plan_start_time" attrs={{type:'date'}} title="预计开始时间" />
					<zn.react.FormItem required={true} ref="plan_end_time" type="Input" name="plan_end_time" attrs={{type:'date'}} title="预计结束时间" />
					<zn.react.FormItem ref="attachments" type="FileUploader" name="attachments" title="附件" />
					<zn.react.FormItem ref="comment" type="Textarea" name="comment" title="说明" />
				</zn.react.Group>
				<div style={{padding: 5, lineHeight: '30px'}}>选择区域及门店：</div>
				{
					Object.keys(this.state.regions).map(function (key){
						if(this.state.regions[key].shops.length){
							return <Region ref={key} {...this.state.regions[key]} brandId={this.state.brand.id} />;
						}
					}.bind(this))
				}
				<zn.react.Button text="确认创建项目" icon="fa-pencil" status="warning" style={{margin: 5}} onClick={this.__onCreate} />
			</div>
		);
	}
});
