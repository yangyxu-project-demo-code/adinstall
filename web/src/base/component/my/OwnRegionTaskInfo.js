var React = require('react');
var ReactDOM = require('react-dom');

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
		if(nextProps.orderCode != this.props.orderCode){
			this.__loadInfo(nextProps.orderCode);
		}
	},
	__loadInfo: function (orderCode){
		zn.preloader.open({
			content: '加载中...'
		});
		zn.http.post('/adinstall/supplier_order/orderInfo', {
			orderCode: orderCode || this.props.orderCode
		}).then(function (data){
			if(data.status==200){
				this.setState({
					data: data.result
				});
			}else {
				zn.toast.error('操作失败, ' + data.result);
			}
			zn.preloader.close();
		}.bind(this), function (err){
			zn.toast.error('网络请求失败');
			zn.preloader.close();
		});
	},
	__onConfirm: function (){
		var _self = this,
			_signature_note = this.refs.signature_note.validate();
		if(!this.refs.SignatureArea.signaturePad.toData().length){
			return zn.notification.error('还未签名');
		}
		var _value = this.refs.SignatureArea.getValue();
		zn.confirm('签收后工人将退场, 确认签收？','提示', function (){
			zn.preloader.open({
				content: '提交中...'
			});
			zn.http.post('/adinstall/supplier_order/doSign', {
				orderCode: _self.state.data.code,
				openid: zn.plugin.wechat.getToken().openid,
				signature: _value,
				signature_note: _signature_note
			}).then(function (data){
				if(data.status==200){
					zn.toast.success('签收成功');
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
	__doSuccess: function (){
		//console.log('提交成功');
	},
	__onComplaint: function (){
		zn.dialog({
			title: '投诉',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: "AdinstallProjectItemFeedback"}}
				hiddens={{
					brand_shop_id: this.state.data.brand_shop_id,
					project_id: this.state.data.project_id,
					project_item_id: this.state.data.id,
					supplier_openid: this.state.data.supplier_openid,
					brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
				}}
				merge="values"
				itemClassName="column"
				onSubmitSuccess={this.__doSuccess}
				items={[
					{ title: '投诉内容', name: 'comment', type: 'Textarea', required: true },
					{ title: '截图附件', name: 'attachments', type: 'FileUploader', required: true }
				]} />
		});
	},
	__onRepair: function (){
		zn.dialog({
			title: '报修',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: "AdinstallProjectItemService"}}
				hiddens={{
					brand_shop_id: this.state.data.brand_shop_id,
					project_id: this.state.data.project_id,
					project_item_id: this.state.data.id,
					supplier_openid: this.state.data.supplier_openid,
					brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
				}}
				merge="values"
				itemClassName="column"
				onSubmitSuccess={this.__doSuccess}
				items={[
					{ title: '报修内容', name: 'comment', type: 'Textarea', required: true },
					{ title: '截图附件', name: 'attachments', type: 'FileUploader', required: true }
				]} />
		});
	},
	__onComment: function (){
		zn.dialog({
			title: '评价',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: "AdinstallSupplierComment"}}
				hiddens={{
					brand_shop_id: this.state.data.brand_shop_id,
					project_id: this.state.data.project_id,
					project_item_id: this.state.data.id,
					supplier_openid: this.state.data.supplier_openid,
					brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
				}}
				merge="values"
				itemClassName="column"
				onSubmitSuccess={this.__doSuccess}
				items={[
					{ title: '备注', name: 'comment', type: 'Textarea', required: true },
					{ title: '截图附件', name: 'attachments', type: 'FileUploader', required: true }
				]} />
		});
	},
	__renderBody: function (){
		if(this.state.data){
			return <div className="info">
				{
					this.state.data.status>2 && <div className="sign-code">
						{
							!!this.state.data.signature && <div className="signature">
								<img src={this.state.data.signature} />
								<div className="title">
									<span className="b">{this.state.data.signature_openid_convert.split('&&__zn__&&')[0]}</span>
									于
									<span className="b">{this.state.data.signature_time}</span>
									签收
								</div>
								{
									this.state.data.signature_note && <div className="note">
										<strong>签收备注：</strong>
										{this.state.data.signature_note}
									</div>
								}
							</div>
						}
						<div className="msg-tip">注：电子签名等同纸质签名具有同等法律效力.</div>
					</div>
				}
				<zn.app.adinstall.OrderBaseInfo data={this.state.data} />
				<div className="adinstall-group">
					<div className="group-title">施工图片</div>
					<div className="group">
						<zn.react.Form
							itemClassName="column"
							items={[
								{ title: '全景图', name: 'full_images', type: 'FileUploader' },
								{ title: '物料图', name: 'materiel_images', type: 'FileUploader' },
								{ title: '工单备注', name: 'supplier_work_note', type: 'Textarea' }
							]}
							value={this.state.data}
							readonly={true}
							buttons={[]} />
					</div>
				</div>
			</div>;
		}else {
			return <zn.react.DataLoader loader="timer" content="加载中..." />;
		}
	},
	render: function(){
		return (
			<div className="adinstall-order-info">
				{this.__renderBody()}
			</div>
		);
	}
});
