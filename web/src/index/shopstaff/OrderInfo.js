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
		if(nextProps.request.search.orderCode != this.props.request.search.orderCode){
			this.__loadInfo(nextProps.request.search.orderCode);
		}
	},
	__loadInfo: function (orderCode){
		zn.preloader.open({
			content: '加载中...'
		});
		zn.http.post('/adinstall/supplier_order/orderInfo', {
			orderCode: orderCode || this.props.request.search.orderCode
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
		zn.notification.success('提交成功');
	},
	__onComplaint: function (){
		zn.http.post('/zn.plugin.admin/model/selectOne', {
			model: 'zn_adinstall_project_item_complaint',
			where: {project_item_id: this.state.data.id}
		}).then(function (data){
			var _complaint = data.result;
			if(_complaint){
				return zn.dialog({
					title: "您的投诉",
					content: <div>
						{
							_complaint.status == 0 && <div style={{backgroundColor: '#EC9518', color: '#FFF', fontSize: 10, padding: 10 }}>处理中, 客服或安装人员会联系您。</div>
						}
						{
							_complaint.status == 1 && <div style={{backgroundColor: '#0ED447', color: '#FFF', fontSize: 10, padding: 10 }}>已解决</div>
						}
						{
							_complaint.status == -1 && <div style={{backgroundColor: '#BDB7B7', color: '#FFF', fontSize: 10, padding: 10 }}>已关闭</div>
						}
						<zn.react.Form
							itemClassName="column"
							onSubmitSuccess={this.__doSuccess}
							buttons={_complaint.status == 100 ? [{text:'关闭', status: 'danger', icon: 'fa-remove'}, {text:'已解决', icon: 'fa-check-circle', status: 'success'}] : []}
							value={_complaint}
							disabled={true}
							items={[
								{ title: '标题', name: 'zn_title', type: 'Input' },
								{ title: '类型', name: 'type', type: 'CheckboxGroup', data: ['未按时间进场', '服务态度不好', '沟通不舒畅', '安装不专业'] },
								{ title: '投诉内容', name: 'comment', type: 'Textarea' },
								{ title: '截图附件', name: 'attachments', type: 'FileUploader' }
							]} />
					</div>
				}), false;
			}
			zn.dialog({
				title: '投诉',
				content: <zn.react.Form
					action='/adinstall/supplier_order/complaint'
					hiddens={{
						order_code: this.state.data.code,
						brand_shop_id: this.state.data.brand_shop_id,
						project_id: this.state.data.project_id,
						project_item_id: this.state.data.id,
						supplier_openid: this.state.data.supplier_openid,
						brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
					}}
					itemClassName="column"
					onSubmitSuccess={this.__doSuccess}
					items={[
						{ title: '标题', name: 'zn_title', type: 'Input', required: true },
						{ title: '类型', name: 'type', type: 'CheckboxGroup', data: ['未按时间进场', '服务态度不好', '沟通不舒畅', '安装不专业'], required: true },
						{ title: '投诉内容', name: 'comment', type: 'Textarea', required: true },
						{ title: '截图附件', name: 'attachments', type: 'FileUploader', required: true }
					]} />
			});
		}.bind(this))

	},
	__onRepair: function (){
		zn.dialog({
			title: '报修',
			content: <zn.react.Form
				action='/zn.plugin.admin/model/insert'
				exts={{model: "AdinstallProjectItemService"}}
				hiddens={{
					brand_id: this.state.data.brand_id,
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
		zn.http.post('/zn.plugin.admin/model/selectOne', {
			model: 'zn_adinstall_project_item_complaint',
			where: {project_item_id: this.state.data.id}
		}).then(function (data){
			if(data.result){
				return zn.toast.warning('您已完成评价, 谢谢您的支持'), false;
			}
			zn.dialog({
				title: '评价',
				content: <zn.react.Form
					action='/zn.plugin.admin/model/insert'
					exts={{model: "AdinstallSupplierComment"}}
					hiddens={{
						order_code: this.state.data.code,
						brand_id: this.state.data.brand_id,
						brand_shop_id: this.state.data.brand_shop_id,
						project_id: this.state.data.project_id,
						project_item_id: this.state.data.id,
						supplier_openid: this.state.data.supplier_openid,
						brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
					}}
					itemClassName="column"
					onSubmitSuccess={this.__doSuccess}
					items={[
						{ title: '标题', name: 'zn_title', type: 'Input', required: true },
						{ title: '评价内容', name: 'comment', type: 'Textarea', required: true }
					]} />
			});
		}.bind(this));
	},
	__renderBody: function (){
		if(this.state.data){
			return <div className="info">
				{
					this.state.data.status>2 && <div className="sign-code">
						{
							!this.state.data.signature ? <zn.app.adinstall.SignatureArea ref="SignatureArea" /> : <div className="signature">
								<img src={this.state.data.signature} />
								<div className="title">
									<span className="b">{this.state.data.signature_openid_convert.split('&&__zn__&&')[0]}</span>
									于
									<span className="b">{this.state.data.signature_time}</span>
									签收
								</div>
								{this.state.data.signature_note && <div className="note"><strong>签收备注：</strong>{this.state.data.signature_note}</div>}
							</div>
						}
						<div className="msg-tip">注：电子签名等同纸质签名具有同等法律效力.</div>
					</div>
				}
				{
					this.state.data.status==3 && <div>
						<zn.react.FormItem ref="signature_note" style={{padding: 15}} title="签收备注" type="Textarea" className="column" />
						<div onClick={this.__onConfirm} className="submit">确认签收</div>
					</div>
				}
				{
					this.state.data.status > 3 && <div style={{display: 'flex', backgroundColor: '#FFF'}}>
						<div onClick={this.__onComment} className="submit warning"><i className="fa fa-comment zr-padding-3" />评价</div>
						<div onClick={this.__onComplaint} className="submit"><i className="fa fa-edit zr-padding-3" />投诉</div>
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
			<zn.react.Page className="adinstall-order-info" title="订单详情">
				{this.__renderBody()}
			</zn.react.Page>
		);
	}
});
