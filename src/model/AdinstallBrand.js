zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_brand", {
        mixins: [
            model.Base,
            model.Rights
        ],
        properties: {
            type_code: {
                value: null,
                type: ['varchar', 50],
                default: '00'
            },
            type: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            status: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            level: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            rank: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            province: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            city: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            address: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            coordinate: {
                value: null,
                type: ['varchar', 100],
                default: ','
            },
            contact: {
                value: null,
                type: ['varchar', 15],
                default: ''
            },
            phone: {
                value: null,
                type: ['varchar', 15],
                default: ''
            },
            email: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            logo: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            attachments: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            adv_type_ids: {
                value: null,
                type: ['varchar', 500],
                default: ','
            },
            comment: {
                value: null,
                type: ['varchar', 500],
                default: ''
            }
        }
    });

})
