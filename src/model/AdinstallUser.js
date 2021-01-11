zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_user", {
        mixins: [
            model.Base
        ],
        properties: {
            openid: {
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
            role: {
                value: null,
                type: ['varchar', 50],
                default: '' //用户、执行人员、项目经理、区域经理
            },
            avatar: {
                value: null,
                type: ['varchar', 200],
                default: ''
            }
        }
    });

})
