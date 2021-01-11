zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project_item", {
        mixins: [
            model.Base,
            model.Rights
        ],
        properties: {
            code: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            project_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            project_region_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_id: {
                value: null,
                type: ['int', 10],
                convert: 'adinstall_convert_brand({})',
                default: 0
            },
            brand_shop_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            brand_shop_frame_ids: {
                value: null,
                type: ['varchar', 200],
                default: ','
            },
            status: {
                value: null,
                type: ['int', 10],
                //convert: 'zn_plugin_admin_convert_var({})',
                options: [
                    { text: '待审批', value: 0 },
                    { text: '待确认', value: 1 },
                    { text: '待签到', value: 2 },
                    { text: '待签收', value: 3 },
                    { text: '待复核', value: 4 },
                    { text: '已完成', value: 5 }
                ],
                default: 0
            },
            region: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            plan_start_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            plan_end_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            start_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            end_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            order_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            signature: {
                value: null,
                type: ['longtext']
            },
            signature_openid: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            signature_note: {
                value: null,
                type: ['varchar', 2000],
                default: ''
            },
            signature_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            sign_in_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            sign_in_address: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            verification_code: {
                value: null,
                type: ['varchar', 10],
                default: ''
            },
            supplier_openid: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            supplier_work_note: {
                value: null,
                type: ['varchar', 2000],
                default: ''
            },
            suppliers: {
                value: null,
                type: ['varchar', 500],
                default: ','
            },
            work_type: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            cost: {
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
                type: ['varchar', 1000],
                default: ''
            },
            full_images: {
                value: null,
                type: ['varchar', 1000],
                default: ','
            },
            materiel_images: {
                value: null,
                type: ['varchar', 1000],
                default: ','
            },
            requirement_images: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            }
        }
    });

})
