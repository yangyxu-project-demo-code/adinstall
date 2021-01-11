var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			status: 1,
			data: zn.store.post('/adinstall/supplier_order/pagingOrder', {
				status: 1,
				openid: zn.plugin.wechat.getToken().openid
			}),
			tabs: [
				{ text: '待确认', status: 1, icon: 'fa-clock-o' },
				{ text: '待执行', status: 2, icon: 'fa-sign-in' },
				{ text: '待签收', status: 3, icon: 'fa-edit' },
				{ text: '已驳回', status: -3, icon: 'fa-arrow-to-left' },
                { text: '已完成', status: 100, icon: 'fa-check' }
            ]
		};
  	},
	__onTabClick: function (tab, index){
        this.setState({
			status: tab.status
        });
		zn.preloader.open({
			content: '加载中...'
		});
		this.state.data.extend({
			status: tab.status,
			pageIndex: 1
		}).exec();
    },
	__acceptOrder: function (item){
		var _self = this;
		zn.confirm('接单后将不允许拒单, 确认接单？','提示', function (){
			zn.preloader.open({
				content: '处理中...'
			});
			zn.http.post('/adinstall/supplier_order/accept', {
				orderCode: item.code,
				openid: zn.plugin.wechat.getToken().openid
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('接单成功');
					_self.state.data.refresh();
				}else {
					zn.toast.error('操作失败, ' + data.result);
				}
				zn.preloader.close();
			}, function (err){
				zn.toast.error('网络请求失败');
				zn.preloader.close();
			});
		});
	},
	__rejectOrder: function (item){
		var _self = this;
		zn.confirm('拒单后会影响信用, 确认拒单？','提示', function (){
			zn.preloader.open({
				content: '处理中...'
			});
			zn.http.post('/adinstall/supplier_order/reject', {
				orderCode: item.code,
				openid: zn.plugin.wechat.getToken().openid
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('处理完成');
					_self.state.data.refresh();
				}else {
					zn.toast.error('操作失败, ' + data.result);
				}
				zn.preloader.close();
			}, function (err){
				zn.toast.error('网络请求失败');
				zn.preloader.close();
			});
		});
	},
	__renderStatus: function (status){
		switch (status) {
			case 1:
				return <span className="">待确认</span>;
			case 2:
				return <span style={{color:'#f0ad4e'}}>待执行</span>;
			case 3:
				return <span style={{color:'#4FCCD9'}}>待签收</span>;
			case 100:
			default :
				return <span style={{color: 'green'}}>已完成</span>;
		}
	},
	__signInOrder: function (item){
		var _self = this;
		zn.confirm('系统将获取您当前的真实位置并显示在订单上, 确认签到？','提示', function (){
			wx.getLocation({
				type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				success: function (res) {
					zn.preloader.open({
						content: '签到中...'
					});
					zn.http.post('/adinstall/supplier_order/signIn', {
						orderCode: item.code,
						address: res.latitude + ',' + res.longitude
					}).then(function (data){
						if(data.status==200){
							zn.toast.success('签到成功');
							_self.state.data.refresh();
						}else {
							zn.toast.error('操作失败, ' + data.result);
						}
						zn.preloader.close();
					}, function (err){
						zn.toast.error('网络请求失败');
						zn.preloader.close();
					});
				},
				error: function (err){
					zn.toast.error(err);
				}
			});
		});
	},
	__openOrderAddress: function (item){
		var _address = item.sign_in_address.split(',');
		wx.openLocation({
			latitude: parseFloat(_address[0]), // 纬度，浮点数，范围为90 ~ -90
			longitude: parseFloat(_address[1]), // 经度，浮点数，范围为180 ~ -180。
			name: '签到处', // 位置名
			scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大,
			success: function (){
				zn.toast.success('打开成功');
			},
			success: function (err){
				zn.toast.error(err);
			}
		});
	},
	__itemActionRender: function (item){
		switch (item.status) {
			case 1:
				return <div className="adinstall-btns">
					<span className="btn" onClick={()=>this.__acceptOrder(item)}>确认接单</span>
					<span className="btn danger" onClick={()=>this.__rejectOrder(item)}>拒单</span>
				</div>;
			case 2:
				return <div className="adinstall-btns">
					{
						/*
							<span className="btn" onClick={()=>this.__bookOrder(item)}>预约</span>
						*/
					}
					{
						/*
						{
							item.sign_in_time?<span className="btn" onClick={()=>this.__openOrderAddress(item)}><i className="fa fa-map-marker zr-padding-3" />已签到</span>:<span className="btn danger" onClick={()=>this.__signInOrder(item)}>签到</span>
						}
						*/
					}
				</div>;
			case 3:
				return <span></span>;
			case 100:
			default:
				return null;
		}
	},
	__itemRender: function (item, index){
		return <div key={index} className="order">
			<zn.app.adinstall.OrderItem data={item} onClick={()=>zn.react.session.relativeJump('/supplier.order.info', { orderCode: item.code })} />
			{
				this.__itemActionRender(item)
			}
		</div>;
	},
	__onPagingListData: function (){
		zn.preloader.close();
	},
	render: function(){
		return (
			<div className="adinstall-index-supplier-orders">
                <div className="orders-header">
					<ul className="task-status">
						{
							this.state.tabs.map(function (tab, index){
								return <li onClick={()=>this.__onTabClick(tab, index)} key={index} className={this.state.status==tab.status?'curr':''}>
									<i className={"fa zr-padding-3 " + tab.icon} />
									<span>{tab.text}</span>
								</li>;
							}.bind(this))
						}
					</ul>
                </div>
                <div className="orders-body">
					<zn.react.PagingList className="order-list" onData={this.__onPagingListData} data={this.state.data} itemRender={this.__itemRender} />
                </div>
            </div>
		);
	}
});
