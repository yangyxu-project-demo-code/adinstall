var React = require('react');
var ReactDOM = require('react-dom');
var QRCode = require('qrcode.react');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
			data: null
		};
  	},
	componentDidMount: function (){
		this.__loadInfo();
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.request.search.orderCode != this.props.request.search.orderCode){
			this.__loadInfo(nextProps.request.search.orderCode);
		}
	},
	__loadInfo: function (orderCode){
		zn.http.post('/adinstall/supplier_order/orderInfo', {
			orderCode: orderCode || this.props.request.search.orderCode
		}).then(function (data){
			this.setState({
				data: data.result
			});
		}.bind(this));
	},
	__submitOrder: function (){
		var _self = this;
		zn.confirm('工单提交后请给门店负责人出示签收二维码进行签收, 谢谢合作。','提示', function (){
			zn.preloader.open({
				content: '提交中...'
			});
			zn.http.post('/adinstall/supplier_order/submit', {
				orderCode: _self.state.data.code
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('提交成功等待签收');
					_self.__loadInfo();
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
	__reSubmitOrder: function (){
		var _self = this;
		zn.confirm('工单提交后进入项目负责人审核阶段不再允许上传及修改, 确认提交？','提示', function (){
			zn.preloader.open({
				content: '提交中...'
			});
			zn.http.post('/adinstall/supplier_order/resubmit', {
				orderCode: _self.state.data.code
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('提交成功等待审核');
					_self.__loadInfo();
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
	__getButtons: function (){
		if(this.state.data.status==2){
			return [
				{ type: 'submit', icon: 'fa-upload', text: '上传图片', status: 'warning' },
				{ text: '提交工单', status: 'danger', onClick: this.__submitOrder }
			];
		}
		if(this.state.data.status==-3){
			return [
				{ type: 'submit', icon: 'fa-upload', text: '重新上传图片', status: 'warning' },
				{ text: '重新提交工单', status: 'danger', onClick: this.__reSubmitOrder }
			];
		}

		return [];
	},
	__renderBody: function (){
		if(this.state.data){
			return <div className="info">
				{
					this.state.data.status == 3 && <div className="sign-code">
						<QRCode value={window.location.origin + window.location.pathname + "#/shopstaff.order.info?orderCode=" + this.state.data.code} />
						<div className="msg-tip">签收二维码(店长扫一扫签收)</div>
					</div>
				}
				{
					this.state.data.status > 3 && <div className="sign-code">
						<div className="signature">
							<img src={this.state.data.signature} />
							<div className="title">
								<span className="b">{this.state.data.signature_openid_convert.split('&&__zn__&&')[0]}</span>
								于
								<span className="b">{this.state.data.signature_time}</span>
								提交
							</div>
						</div>
						<div className="msg-tip">注：电子签名等同纸质签名具有同等法律效力.</div>
					</div>
				}
				<zn.app.adinstall.OrderBaseInfo data={this.state.data} />
				{
					!!(this.state.data.status>1) && <div className="adinstall-group">
						<div className="group-title">施工图片</div>
						<div className="group">
							<zn.react.Form
								items={[
									{ title: '全景图', name: 'full_images', type: 'FileUploader', required: true },
									{ title: '物料图', name: 'materiel_images', type: 'FileUploader', required: true },
									{ title: '工单备注', name: 'supplier_work_note', type: 'Textarea' }
								]}
								merge="data"
								exts={{ orderCode: this.state.data.code }}
								action="/adinstall/supplier_order/saveImages"
								value={this.state.data}
								readonly={(this.state.data.status==2||this.state.data.status==-3)?false:true}
								buttons={this.__getButtons()} />
						</div>
					</div>
				}
			</div>;
		}else {
			return <zn.react.DataLoader loader="timer" content="加载中..." />;
		}
	},
	render: function(){
		return (
			<zn.react.Page className="adinstall-order-info" title="订单详情">
				{this.__renderBody()}
			</zn.react.Page>
		);
	}
});
