require('../../../../../zn/zeanium-react-web/index.web.wap.js');
//require('zeanium-react-web');
zn.react.session.setEngine(localStorage);
zn.react.Application.create({
	plugins: [
		require('../../../../../zn/zn-plugin-admin'),
		require('../../../../../zn/zn-plugin-wechat'),
		//require('../base/_entry.js')
	],
	home: '/index',
	routers: {
		'/index': require('./Index.js'),
		'/admin.home': require('./admin/Home.js'),
		'/guest.home': require('./guest/Home.js'),
		'/supplier.auth': require('./supplier/Auth.js'),
		'/supplier.join': require('./supplier/Join.js'),
		'/supplier.index': require('./supplier/Index.js'),
		'/supplier.home': require('./supplier/Home.js'),
		'/supplier.my': require('./supplier/My.js'),
		'/supplier.my.base.info': require('./supplier/my/BaseInfo.js'),
		'/supplier.my.base.info.edit': require('./supplier/my/BaseInfoEdit.js'),
		'/supplier.my.orders': require('./supplier/my/Orders.js'),
		'/supplier.my.message': require('./supplier/my/Message.js'),
		'/supplier.my.bills': require('./supplier/my/Bills.js'),
		'/supplier.order.info': require('./supplier/OrderInfo.js'),
		'/supplier.order.complaint': require('./supplier/order/Complaint.js'),
		'/supplier.order.service': require('./supplier/order/Service.js'),
		'/supplier.order.comment': require('./supplier/order/Comment.js'),
		'/shopstaff.auth': require('./shopstaff/Auth.js'),
		'/shopstaff.order.info': require('./shopstaff/OrderInfo.js'),
		'/brand.index': require('./brand/Index.js')
	},
	onInit: function (){
		return <zn.plugin.wechat.Login onAuthSuccess={this.__onAuthSuccess.bind(this)} />;
	},
	__onAuthSuccess: function (token, hash){
		setTimeout(this.update.bind(this), 10);
	}
});
