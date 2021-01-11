var React = require('react');

module.exports = React.createClass({
	getInitialState: function (){
        return {
            status: 100,
			items: [100, 0, -1, 1, -2, 2, 3, 4, 5, 6, 7, 8].map(function (item){
				return {status: item, text: this.__renderStatus(item)};
			}.bind(this))
        }
    },
	__renderStatus: function (status){
		switch (status) {
			case 100:
				return <span>全部</span>;
			case 0:
				return <span style={{color:'#FF9800'}}>待审核</span>;
			case -1:
				return <span style={{color:'#FF5722'}}>已驳回</span>;
			case 1:
				return <span style={{color:'#2196F3'}}>待接单</span>;
			case -2:
				return <span style={{color:'#f91100'}}>已拒单</span>;
			case 2:
				return <span style={{color:'#f0ad4e'}}>已接单</span>;
			case 3:
				return <span style={{color:'#4FCCD9'}}>待签收</span>;
			case 4:
				return <span style={{color: '#6d81ec'}}>签收待监理确认</span>;
			case 5:
				return <span style={{color: '#d068e2'}}>签收待项目确认</span>;
			case 6:
				return <span style={{color: '#673AB7'}}>待结算</span>;
			case 7:
				return <span style={{color: '#0aca12'}}>已结算</span>;
			case 8:
				return <span style={{color: '#b5b1b1'}}>已关闭</span>;
		}
	},
	render:function(){
		return (
			<zn.react.Page title='工单管理' className="adinstall-list-view-page"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="status"
					onClick={(value)=>this.setState({ status: value.value })}
					value={this.state.status}
					data={this.state.items} />} >
                <zn.app.adinstall.BrandAllProjectTasks status={this.state.status} />
			</zn.react.Page>
		);
	}
});
