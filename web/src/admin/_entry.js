require('../../../../../zn/zeanium-react-web/index.web.wap.js');
//require('zeanium-react-web');
zn.DEBUG = true;
zn.react.app = zn.react.Application.create({
	plugins: [
		require('../../../../../zn/zn-plugin-admin'),
		require('../../../../../zn/zn-plugin-wechat'),
		require('../base/_entry.js')
	],
	home: '/znpluginadmin.login',
	main: '/znpluginadmin.main/znpluginadmin.my.info',
	path: '/znpluginadmin.main',
	routers: {
		'/role.user': require('./role/User.js'),
		'/role.supplier': require('./role/Supplier.js'),
		'/role.supplier.center': require('./role/SupplierCenter.js'),
		'/role.supplier.apply': require('./role/SupplierApply.js'),
		'/brand': require('./brand/Index.js'),
		//'/brand.center': './brand/Center.js',
		'/brand.shop': require('./brand/ShopIndex.js'),
		'/brand.shop.staff': require('./brand/ShopStaff.js'),
		'/brand.shop.frame': require('./brand/ShopFrame.js'),
		'/brand.shop.info': require('./brand/ShopInfo.js'),
		'/brand.project': require('./brand/ProjectIndex.js'),
		'/brand.project.task': require('./brand/ProjectTaskIndex.js'),
		'/project.index': require('./brand/ProjectIndex.js'),
		'/project.manager': require('./project/Manager.js')
	}
});
