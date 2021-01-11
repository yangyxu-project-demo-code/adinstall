var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            items: [
                { value: zn.app.adinstall.ProjectBaseInfo, text: '介绍' },
                { value: zn.app.adinstall.ProjectRegions, text: '区域' },
                { value: zn.app.adinstall.ProjectTasks, text: '工单' }
            ],
            value: zn.app.adinstall.ProjectBaseInfo
        }
    },
	render:function(){
		return (
			<zn.react.Page title='项目详情'
				headerCenter={<zn.react.ListView
					className="zr-tab-ios"
					selectMode="radio"
					valueKey="value"
					onClick={(value)=>this.setState({ value: value.value })}
					value={this.state.value}
					data={this.state.items} />} >
                {
                    this.state.value && <this.state.value zn_id={this.props.request.search.zn_id} />
                }
			</zn.react.Page>
		);
	}
});