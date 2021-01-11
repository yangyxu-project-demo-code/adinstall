var React = require('react');

var ShopTask = React.createClass({
	getInitialState: function (){
		return {
			value: null,
			tasks: []
		}
	},
	componentDidMount: function (){
		this.__loadTasks();
	},
	__onChange: function (shop){
		this.state.value = shop.value;
		this.__loadTasks();
	},
	__loadTasks: function (){
		zn.preloader.open({content:'工单加载中...'})
		zn.http.post('/adinstall/project/getTasks', {
			shop_id: this.state.value,
			region_project_id: this.props.region_project.id
		}).then(function (data){
			if(data.status==200){
				this.state.tasks = data.result;
				this.forceUpdate();
			}else {
				zn.notification.error(data.result);
			}
			zn.preloader.close();
		}.bind(this), function (){
			zn.notification.error('网络请求失败');
			zn.preloader.close();
		});
	},
	__onDeleteProjectTask: function (task){
		zn.confirm('确定删除编号：'+task.code+'的单据么吗？','提示', function (){
			zn.http.post('/adinstall/project/deleteTask', {
				taskCode: task.code
			}).then(function (data){
				if(data.status==200){
					zn.notification.success('删除成功');
					this.__loadTasks();
				}else {
					zn.notification.error(data.result);
				}
			}.bind(this), function (){
				zn.notification.error('网络请求失败');
			});
		}.bind(this));
	},
	render:function(){
		return (
			<div className="adinstall-admin-brand-project-info-shop-task">
				<div className="shops">
					<div className="title">
						<span>门店</span>
					</div>
					<div className="content">
						{
							Object.keys(this.props.provinces).map(function (key){
								var _province = this.props.provinces[key];
								if(_province.shops.length){
									return <div className="province">
										<div className="p-title">{_province.zn_title}({_province.shops.length}家门店)</div>
										<ul className="p-shops">
											{
												_province.shops.map(function (shop, index){
													return <li onClick={()=>this.__onChange(shop)} className={"shop " + (this.state.value==shop.value?'curr':'')} data-tooltip={shop.address}>{shop.zn_title}</li>;
												}.bind(this))
											}
										</ul>
									</div>;
								}else {
									return null;
								}
							}.bind(this))
						}
					</div>
				</div>
				<div className="tasks">
					<div className="title">工单({this.state.tasks.length}个)</div>
					<div className="content">
						<ul className="task-list">
							{
								this.state.tasks.map(function (task, index){
									return <li className="task-item">
										<zn.app.adinstall.OrderItem data={task} onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', { orderCode: task.code })} />
									</li>;
								}.bind(this))
							}
						</ul>
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
	render:function(){
		if(!this.state.project){
			return <zn.react.DataLoader content="正在加载..." loader="timer" />
		}
		return (
			<div className="adinstall-admin-create-brand-project">
				<div className="index-title">
					<span>【{this.state.project.brand_id_convert}】{this.state.project.zn_title}</span>
				</div>

				<div className="adinstall-group">
					<div className="group-title" style={{backgroundColor: '#f3f2f2', alignItems: 'center'}}>
						<span className="name">{this.state.project.code}</span>
						<span className="adinstall-tag">由 {this.state.project.zn_create_user_convert} 于 {this.state.project.zn_create_time} 指派</span>
					</div>
					<div className="group">
						<div className="group-item">
							<span className="_key">预计周期：</span>
							<span className="_value">{this.state.project.plan_start_time} ~ {this.state.project.plan_end_time}</span>
						</div>
						<div className="group-item">
							<span className="_key">附件：</span>
							<zn.react.Files className="_value" value={this.state.project.attachments} />
						</div>
						<div className="group-item">
							<span className="_key">说明</span>
							<span className="_value">{this.state.project.comment}</span>
						</div>
					</div>
				</div>

				<div className="adinstall-group">
					<div className="group-title" style={{backgroundColor: '#f3f2f2', alignItems: 'center'}}>
						<div className="group-title-left">
							<a className="name">{this.state.region_project.region_convert}</a>
							<span className="adinstall-tag">{this.state.region_project.zn_rights_owner_id_convert}</span>
						</div>
						<div className="group-title-right">
							<progress data-tooltip={"已确认(" + this.state.region_project.task_finished_count + ") / 工单总量(" + this.state.region_project.task_count + ")"}  style={{margin: 8}} value={this.state.region_project.task_finished_count} max={this.state.region_project.task_count}></progress>
							<span className="zr-fr adinstall-tag">{(this.state.region_project.task_finished_count/this.state.region_project.task_count * 100).toFixed(2)}% - {this.state.region_project.task_finished_count} / {this.state.region_project.task_count}</span>
						</div>
					</div>
					<div className="group">
						<div className="group-item">
							<span className="_key">预计周期：</span>
							<span className="_value">{this.state.region_project.start_time} ~ {this.state.region_project.end_time}</span>
						</div>
						<div className="group-item">
							<span className="_key">附件：</span>
							<zn.react.Files className="_value" value={this.state.region_project.attachments} />
						</div>
						<div className="group-item">
							<span className="_key">说明</span>
							<span className="_value">{this.state.region_project.comment}</span>
						</div>
						<ShopTask provinces={this.state.provinces} region_project={this.state.region_project} />
					</div>
				</div>
			</div>
		);
	}
});
