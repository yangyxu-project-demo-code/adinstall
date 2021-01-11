zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project_region", {
        mixins: [
            model.Base,
            model.Rights
        ],
        properties: {
            project_code: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            project_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            region: {
                value: null,
                type: ['int', 11],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            region_owner: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_user({})',
                default: 0
            },
            status: {
                value: null,
                type: ['int', 10],
                default: 0
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
            brand_id: {
                value: null,
                type: ['int', 11],
                convert: 'adinstall_convert_brand({})',
                default: 0
            },
            brand_shop_ids: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            task_count: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            task_resolved_count: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            task_finished_count: {
                value: null,
                type: ['int', 11],
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
