zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project", {
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
            status: {
                value: null,
                type: ['int', 10],
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
            brand_id: {
                value: null,
                type: ['int', 11],
                convert: 'adinstall_convert_brand({})',
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
