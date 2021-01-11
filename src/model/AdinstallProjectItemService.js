zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project_item_service", {
        mixins: [
            model.Base
        ],
        properties: {
            brand_shop_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            project_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            project_item_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            supplier_openid: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            type: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            attachments: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            comment: {
                value: null,
                type: ['varchar', 1000],
                default: ''
            }
        }
    });

})
