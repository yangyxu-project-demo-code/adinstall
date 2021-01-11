zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project_item_comment", {
        mixins: [
            model.Base
        ],
        properties: {
            order_code: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            brand_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_shop_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_shop_staff_openid: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            supplier_openid: {
                value: null,
                type: ['varchar', 50],
                default: ''
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
