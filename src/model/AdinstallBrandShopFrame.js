zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_brand_shop_frame", {
        mixins: [
            model.Base
        ],
        properties: {
            code: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            brand_id: {
                value: null,
                type: ['int', 10],
                default: '0'
            },
            brand_shop_id: {
                value: null,
                type: ['int', 10],
                default: '0'
            },
            status: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            adv_position: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            shop_position: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            ji_ceng: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            cai_zhi: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            cai_zhi: {
                value: null,
                type: ['varchar', 200],
                default: ''
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
            bian_kuang_chi_cun_kuang: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            bian_kuang_chi_cun_gao: {
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
            produce_guide: {
                value: null,
                type: ['longtext']
            },
            install_guide: {
                value: null,
                type: ['longtext']
            },
            install_difficulty: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            logo: {
                value: null,
                type: ['varchar', 500],
                default: ''
            },
            images: {
                value: null,
                type: ['varchar', 5000],
                default: ','
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
