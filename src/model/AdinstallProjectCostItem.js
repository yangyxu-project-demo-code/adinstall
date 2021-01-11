zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_project_cost_item", {
        mixins: [
            model.Base
        ],
        properties: {
            logo: {
                value: null,
                type: ['varchar', 500],
                default: ''
            },
            code: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            name: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            type: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
            },
            status: {
                value: null,
                type: ['int', 10],
                convert: 'zn_plugin_admin_convert_var({})',
                default: 0
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
            bao_liu_price: {  //成本价
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            chang_gui_price: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            price1: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            price2: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            price3: {
                value: null,
                type: ['decimal', [10,2]],
                default: 0
            },
            comment: {
                value: null,
                type: ['varchar', 500],
                default: ''
            }
        }
    });

})
