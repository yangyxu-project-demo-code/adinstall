zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_brand_shop", {
        mixins: [
            model.Base
        ],
        properties: {
            brand_id: {
                value: null,
                type: ['int', 10],
                default: '0'
            },
            name: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            code: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            status: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            region: {
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
            zip_code: {
                value: null,
                type: ['varchar', 15],
                default: ''
            },
            contact: {
                value: null,
                type: ['varchar', 15],
                default: ''
            },
            phone: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            telephone: {
                value: null,
                type: ['varchar', 50],
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
            images: {
                value: null,
                type: ['varchar', 1000],
                default: ','
            },
            attachments: {
                value: null,
                type: ['varchar', 3000],
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
