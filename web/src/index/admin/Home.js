var React = require('React');
var Menu = require('./Menu.js');
var My = require('./My.js');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            curr: 0,
            view: Menu,
            tabs: [
                { text: '功能', icon: 'fa-list', url: Menu },
                { text: '我的', icon: 'fa-user', url: My }
            ]
        };
    },

    __onTabClick: function (tab, index){
        this.setState({
            view: tab.url,
            curr: index
        });
    },
    render: function (){
        return (
            <div className="adinstall-index-admin-home">
                <div className="main-header">
                    <div className="head-left">
                        <img className="logo" src="./images/logo.png" />
                        <span>腾麟传媒（员工版）</span>
                    </div>
                    <div className="head-right">
                        <span onClick={()=>zn.react.session.jump('/admin.my.message')} className="message"><i className="fa fa-commenting-o zr-padding-3" />消息</span>
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
