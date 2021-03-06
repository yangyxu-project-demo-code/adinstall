var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/supplier/getSuggestions', { znid: this.props.znid })
		}
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.znid != this.props.znid){
			this.state.data.extend({
				znid: nextProps.znid
			}).exec();
		}
	},
	__onItemRender: function (item){
		return <div style={{borderRadius: 3, backgroundColor: '#FFF'}}>
			<div className="title" style={{display: 'flex', borderBottom: '1px solid #eae7e7', justifyContent: 'space-between', padding: 5}}>
				<span>意见</span>
				<span>{item.zn_create_time}</span>
			</div>
			<div className="content" style={{padding: 10, fontSize: 12}}>
				<div>{item.comment}</div>
				<zn.react.Files value={item.attachments} />
			</div>
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" viewClassName="xx" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
