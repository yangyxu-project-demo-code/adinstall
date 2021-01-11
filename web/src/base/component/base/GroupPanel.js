var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			active: false
		}
	},
	render:function(){
		return (
			<div className={zn.react.classname("adinstall-base-component-group-panel", this.props.className)} style={this.props.style} data-active={this.state.active} >
				<div className="gp-header" onClick={()=>this.setState({ active: !this.state.active })}>
					<div className="gp-header-left">{this.props.left}</div>
					<div className="gp-header-right">
						{this.props.right}
						<i className={"icon fa " + (this.state.active?'fa-angle-down':'fa-angle-right')} />
					</div>
				</div>
				<div className="gp-body">
					{this.props.children}
				</div>
			</div>
		);
	}
});
