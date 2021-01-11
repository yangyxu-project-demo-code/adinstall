zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_adinstall_city", {
        mixins: [
            model.Base,
            model.Tree
        ],
        properties: {
            priority: {
                value: null,
                type: ['varchar', 50],
                default: 'T1'
            }
        }
    });

})
