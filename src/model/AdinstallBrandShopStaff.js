zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_brand_shop_staff", {
        mixins: [
            model.Base
        ],
        properties: {
            openid: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            brand_id: {
                value: null,
                type: ['int', 10],
                default: 0  //月
            },
            shop_id: {
                value: null,
                type: ['int', 10],
                default: 0  //月
            },
            name: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            phone: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            sex: {
                value: null,
                type: ['varchar', 4],
                default: '男'
            },
            qq: {
                value: null,
                type: ['varchar', 20],
                default: ''
            },
            wechat: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            job_title: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            status: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            avatar: {
                value: null,
                type: ['varchar', 200],
                default: ''
            }
        }
    });

})
