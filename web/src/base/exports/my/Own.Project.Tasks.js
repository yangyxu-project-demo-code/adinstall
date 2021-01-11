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
                        { status: 0, text: '待审核' },
						{ status: 5, text: '待完成确认' }
					]} />} >
                <zn.app.adinstall.OwnProjectTasks status={this.state.status} />
			</zn.react.Page>
		);
	}
});