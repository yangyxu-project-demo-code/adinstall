var React = require('react');

var RegionInfo = React.createClass({
	componentDidMount: function (){

	},

	render: function (){
		return (
			<div>

			</div>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function () {
		return {
			active: false,
			data: this.props.data
		}
	},
	__editInfo: function (info){
		var _value = null;
		zn.dialog({
			title: '编辑区域信息',
			content: <zn.react.Form
				action="/zn.plugin.admin/model/update"
				merge="updates"
				exts={{model: 'AdinstallProjectRegion', where: {id: info.id}}}
				items={[
					{ title: '预计开始时间', type: 'Input', name: 'start_time', attrs: {type:'date'} },
					{ title: '预计结束时间', type: 'Input', name: 'end_time', attrs: {type:'date'} },
					{ title: '附件', type: 'FileUploader', name: 'attachments' },
					{ title: '备注', type: 'Textarea', name: 'comment' }
				]}
				value={info}
				onSubmitBefore={(value)=>_value=value}
				onSubmitSuccess={()=>{
					this.setState({data: zn.extend(this.state.data, _value)});
					zn.notification.success('更新成功');
				}}
				buttons={[
					{text:'确认修改', type: 'submit',  status: 'danger', icon: 'fa-edit'}
				]} />
		})
	},
	render:function(){
		var item = this.state.data;
		return (
			<div className="adinstall-group">
				<div className="group-title" style={{backgroundColor: ((item.task_count !=0 && item.task_finished_count==item.task_count)?'#87f587':'#f3f2f2'), alignItems: 'center'}}>
					<div className="group-title-left">
						<a className="name" href={zn.react.session.relativeURL('/adinstall.base.my.project.region.detail', { zn_id: item.zn_id })}>{item.region_convert}</a>
						<span className="adinstall-tag">{item.zn_rights_owner_id_convert}</span>
					</div>
					<div className="group-title-right">
						<progress data-tooltip={"已确认(" + item.task_finished_count + ") / 工单总量(" + item.task_count + ")"}  style={{margin: 8}} value={item.task_finished_count} max={item.task_count}></progress>
						<i onClick={()=>this.__editInfo(item)} style={{margin: 5}} className="zr-fr adinstall-btn danger fa fa-edit" />
						<span className="zr-fr adinstall-tag">{(item.task_finished_count/item.task_count * 100).toFixed(2)}% - {item.task_finished_count} / {item.task_count}</span>
					</div>
				</div>
				<div className="group">
					<div className="group-item">
						<span className="_key">预计周期：</span>
						<span className="_value">{(item.start_time||'').toString().split(' ')[0]} ~ {(item.end_time||'').toString().split(' ')[0]}</span>
					</div>
					<div className="group-item">
						<span className="_key">附件：</span>
						<zn.react.Files className="_value" value={item.attachments} />
					</div>
					<div className="group-item">
						<span className="_key">说明</span>
						<span className="_value">{item.comment}</span>
					</div>
				</div>
			</div>
		);
	}
});
