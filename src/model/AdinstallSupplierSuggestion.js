zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_supplier_suggestion", {
        mixins: [
            model.Base
        ],
        properties: {
            supplier_openid: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            type: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            comment: {
                value: null,
                type: ['varchar', 500],
                default: ''
            },
            attachments: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            }
        }
    });

})
