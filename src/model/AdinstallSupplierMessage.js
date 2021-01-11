zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_supplier_message", {
        mixins: [
            model.Base
        ],
        properties: {
            openid: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            title: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            content: {
                value: null,
                type: ['varchar', 500],
                default: ''
            },
            has_read: {
                value: null,
                type: ['int', 4],
                default: 0
            }
        }
    });

})
