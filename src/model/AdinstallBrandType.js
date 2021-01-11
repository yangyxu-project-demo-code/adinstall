zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_brand_type", {
        mixins: [
            model.Base
        ],
        properties: {
            code: {
                value: null,
                type: ['varchar', 50],
                default: '00'
            }
        }
    });

})
