var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            status: 100
        }
    },
	render:function(){
		return (
			<zn.react.Page title='项目区域' className="adinstall-list-view-page"
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="status"
					onClick={(value)=>this.setState({ status: value.value })}
					value={this.state.status}
					data={[
						{ status: 100, text: '全部' },
						{ status: 0, text: '进行中' },
						{ status: 1, text: '结算中' },
						{ status: 2, text: '已结束' }
					]} />} >
                <zn.app.adinstall.OwnRegions status={this.state.status} />
			</zn.react.Page>
		);
	}
});