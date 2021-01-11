var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            status: 100
        }
    },
	render:function(){
		return (
			<zn.react.Page title='区域工单' className="adinstall-list-view-page"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="status"
					onClick={(value)=>this.setState({ status: value.value })}
					value={this.state.status}
					data={[
						{ status: 100, text: '全部' },
                        { status: -1, text: '已驳回' },
                        { status: -2, text: '已拒单' },
						{ status: 4, text: '签收待确认' }
					]} />} >
                <zn.app.adinstall.OwnRegionTasks status={this.state.status} />
			</zn.react.Page>
		);
	}
});