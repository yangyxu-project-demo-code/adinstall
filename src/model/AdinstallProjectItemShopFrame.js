zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project_item_shop_frame", {
        mixins: [
            model.Base
        ],
        properties: {
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
            brand_shop_frame_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            cost: {
                value: null,
                type: ['decimal', [10, 2]],
                default: 0
            },
            status: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            attachments: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            requirement_images: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            before_images: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            after_images: {
                value: null,
                type: ['varchar', 5000],
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
