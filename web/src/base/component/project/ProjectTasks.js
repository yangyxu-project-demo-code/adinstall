var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			data: zn.store.post('/adinstall/projectdetail/getTasks', {zn_id: this.props.zn_id})
		}
	},
	__onItemRender: function (item){
		return <div>
			<zn.app.adinstall.OrderItem data={item} onClick={()=>zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', { orderCode: item.code })} />
		</div>;
	},
	render:function(){
		return (
			<div>
				<zn.react.PagerView view="ListView" viewClassName="adinstall-base-grid" data={this.state.data} itemRender={this.__onItemRender} />
			</div>
		);
	}
});
