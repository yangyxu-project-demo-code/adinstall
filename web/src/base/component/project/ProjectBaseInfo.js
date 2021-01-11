var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			info: null
		}
	},
	componentDidMount: function (){
		this.__loadInfo();
	},
	__loadInfo: function (){
		zn.preloader.open({
			content: '加载中...'
		});
		zn.http.post('/adinstall/detail/getProjectDetail', {znid: this.props.zn_id})
			.then(function (data){
				if(data.status==200){
					this.setState({ info: data.result });
				}else {
					zn.toast.error(data.result);
				}
				zn.preloader.close();
			}.bind(this), function (){
				zn.preloader.close();
				zn.toast.error('网络请求失败');
			});
	},
	__editInfo: function (info){
		zn.dialog({
			title: '编辑基本信息',
			content: <zn.react.Form
				action="/zn.plugin.admin/model/update"
				merge="updates"
				exts={{model: 'AdinstallProject', where: {id: info.id}}}
				items={[
					{ title: '项目名称', type: 'Input', name: 'zn_title', required: true },
					{ title: '预计开始时间', type: 'Input', name: 'plan_start_time', attrs: {type:'date'}, required: true },
					{ title: '预计结束时间', type: 'Input', name: 'plan_end_time', attrs: {type:'date'}, required: true },
					{ title: '附件', type: 'FileUploader', name: 'attachments' },
					{ title: '备注', type: 'Textarea', name: 'comment' }
				]}
				value={info}
				onSubmitSuccess={()=>this.__loadInfo()}
				buttons={[
					{text:'确认修改', type: 'submit',  status: 'danger', icon: 'fa-edit'}
				]}
				/>
		})
	},
	render:function(){
		if(!this.state.info){
			return <zn.react.DataLoader content="加载中..." loader="timer" />;
		}
		var _info = this.state.info;
		return (
			<div className="adinstall-base-component-project-base-info">
				<div className="adinstall-group">
					<div className="group-title">汇总</div>
					<div className="group">
						<div className="group-item">
							<div className="_key">工单总量</div>
							<div className="_value">{_info.item_total_count||0}个</div>
						</div>
						<div className="group-item">
							<div className="_key">工单总费用</div>
							<div className="_value">{(_info.item_total_cost||0).toFixed(2)}￥(人民币)</div>
						</div>
						<div className="group-item">
							<div className="_key">广告位量</div>
							<div className="_value">{_info.shop_frame_total_count||0}次</div>
						</div>
						<div className="group-item">
							<div className="_key">涉及区域</div>
							<div className="_value">{_info.region_total_count||0}个</div>
						</div>
						<div className="group-item">
							<div className="_key">客户投诉</div>
							<div className="_value">{_info.complaint_total_count||0}件</div>
						</div>
						<div className="group-item">
							<div className="_key">客户评价</div>
							<div className="_value">{_info.comment_total_count||0}次</div>
						</div>
					</div>
				</div>
				<div className="adinstall-group">
					<div className="group-title">详情<i onClick={()=>this.__editInfo(_info)} className="fa zr-fr adinstall-btn danger fa-edit zr-padding-3">编辑</i></div>
					<div className="group">
						<div className="group-item">
							<div className="_key">卡号</div>
							<div className="_value">{_info.code}</div>
						</div>
						<div className="group-item">
							<div className="_key">名称</div>
							<div className="_value">{_info.zn_title}</div>
						</div>
						<div className="group-item">
							<div className="_key">创建时间</div>
							<div className="_value">{_info.zn_create_time}</div>
						</div>
						<div className="group-item">
							<span className="_key">预计周期：</span>
							<span className="_value">{(_info.plan_start_time||'').toString().split(' ')[0]} ~ {(_info.plan_end_time||'').toString().split(' ')[0]}</span>
						</div>
						<div className="group-item">
							<div className="_key">附件</div>
							<zn.react.Files className="_value" value={_info.attachments} />
						</div>
						<div className="group-item">
							<div className="_key">备注</div>
							<div className="_value">{_info.comment}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
