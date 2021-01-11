zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_user_sms", {
        mixins: [
            model.Base
        ],
        properties: {
            phone: {
                value: null,
                type: ['varchar', 20],
                default: ''
            },
            code: {
                value: null,
                type: ['varchar', 10],
                default: ''
            },
            checked: {
                value: null,
                type: ['int', 4],
                default: 0
            }
        }
    });

})
