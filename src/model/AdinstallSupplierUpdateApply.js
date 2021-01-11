zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_supplier_update_apply", {
        mixins: [
            model.Base
        ],
        properties: {
            supplier_id: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            supplier_type: {
                value: null,
                type: ['int', 4],
                default: 0
            },
            level: {
                value: null,
                type: ['varchar', 50],
                default: 'T1'
            },
            rank: {
                value: null,
                type: ['int', 4],
                default: 0
            },
            type: {
                value: null,
                type: ['int', 4],
                default: 0
            },
            region: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            province: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            city: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            address: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            name: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            phone: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            telephone: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            qq: {
                value: null,
                type: ['varchar', 20],
                default: ''
            },
            wechat: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            email: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            work_types: {
                value: null,
                type: ['varchar', 100],
                default: ','
            },
            work_age: {
                value: null,
                type: ['int', 10],
                default: 0  //月
            },
            work_fee: {
                value: null,
                type: ['varchar', 1000],
                default: ''
            },
            work_performance: {
                value: null,
                type: ['varchar', 1000],
                default: ''
            },
            status: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            apply_status: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            age: {
                value: null,
                type: ['int', 10],
                default: 0
            },
            sex: {
                value: null,
                type: ['varchar', 4],
                default: '男'
            },
            company_title: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            company_legal_person: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            company_tax_id: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            company_main_business: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            card_id: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            card_attachments: {
                value: null,
                type: ['varchar', 500],
                default: ','
            },
            bank_card_title: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            bank_card_name: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            bank_card_id: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            bank_card_attachments: {
                value: null,
                type: ['varchar', 500],
                default: ','
            },
            avatar: {
                value: null,
                type: ['varchar', 200],
                default: ''
            }
        }
    });

})
