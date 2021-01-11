zn.define(function (){

    return zn.Controller('admin.user', {
        methods: {
            getRightsMenu: {
                method: 'POST',
                argv: {
                    user_id: null
                },
                value: function (request, response, chain){

                    this.beginTransaction()
                        .query("Select User Info: ", function (sql, data){
                            return zn.sql.select({
                                table: 'zn_plugin_admin_menu',
                                fields: ['id', 'zn_tree_pid','zn_title','url','icon'],
                                order: {
                                    zn_tree_order: 'asc'
                                },
                                where: [
                                    "locate(',2,', zn_tree_parent_path)<>0",
                                    " and " + zn.sql.rights(request.getValue('user_id'))
                                ]
                            })
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(zn.data.arrayToTree(data, { pid: 'zn_tree_pid' }));
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
