var React = require('React');
var Orders = require('./Orders.js');
var My = require('./My.js');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            curr: 0,
            view: Orders,
            tabs: [
                { text: '订单', icon: 'fa-list', url: Orders },
                { text: '我的', icon: 'fa-user', url: My }
            ]
        };
    },
    __onTabClick: function (tab, index){
        this.setState({
            curr: index,
            view: tab.url
        });
    },
    render: function (){
        return (
            <div className="adinstall-index-supplier-home">
                <div className="main-header">
                    <div className="head-left">
                        <img className="logo" src="./images/logo.png" />
                        <span>腾麟传媒（供应商版）</span>
                    </div>
                    <div className="head-right">
                        <span onClick={()=>zn.react.session.jump('/supplier.my.message')} className="message"><i className="fa fa-commenting-o zr-padding-3" />消息</span>
                    </div>
                </div>
                <div className="main-body">
                    {this.state.view && <this.state.view />}
                </div>
                <div className="main-footer">
                    <ul className="menu-tab">
                        {
                            this.state.tabs.map(function (tab, index){
                                return <li onClick={()=>this.__onTabClick(tab, index)} key={index} className={this.state.curr==index?'curr':''}>
                                    <i className={"fa " + tab.icon} />
                                    <span>{tab.text}</span>
                                </li>;
                            }.bind(this))
                        }
                    </ul>
                </div>
            </div>
        );
    }
});
