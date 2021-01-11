zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_brand_shop_frame_update", {
        mixins: [
            model.Base
        ],
        properties: {
            project_item_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_shop_frame_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_shop_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            jing_chi_cun_kuang: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            jing_chi_cun_gao: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            bian_yuan_chi_cun_kuang: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            bian_yuan_chi_cun_gao: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            chu_xue_chi_cun_kuang: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            chu_xue_chi_cun_gao: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            attachments: {
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
