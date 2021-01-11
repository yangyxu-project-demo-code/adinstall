var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/supplier/getTasks', { znid: this.props.znid })
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
		return <div className="adinstall-task">
			<zn.app.adinstall.OrderItem data={item} onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', { orderCode: item.code })} />
		</div>;
	},
	render:function(){
		return (
			<zn.react.PagerView view="ListView" className="adinstall-base-my-own-region-tasks" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
		);
	}
});
