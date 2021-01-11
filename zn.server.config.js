zn.define({
    host: '0.0.0.0',
    port: 6868,
    catalog: '/',
    node_modules: ['zn-plugin-admin', 'zn-plugin-wechat', 'zn-plugin-survey'],
    upload: {
        root: __dirname,
        temp: '/web/www/uploads/temp',
        catalog: '/web/www/uploads/catalog'
    },
    databases: {
        'youyangit': {
            port: 3306,
            type: 'mysql',
            user: 'root',
            host: '0.0.0.0',
            password: '',
            database:''
        },
        'kylinpop': {
            default: true,
            port: 3306,
            type: 'mysql',
            user: 'root',
            host: '0.0.0.0',
            password: '',
            database:''
        }
    },
    wx: {
        ID: 'gh_bc004a1a9747',
        AppID: 'wx6a00bc96652cf528',
        AppSecret: '2fcbc38c1a1b2aad87ae7934eff2a6ff',
        CallBackUrl: 'http://adinstall.service.kylinpop.com/zn.plugin.wechat/wx/validate',
        Token: 'kylinpop2017',
        EncodingAESKey: 'Hpl5RtLd0vHNa8ySLHr0ejPHEX9zqQ95p1GghiNxzqT'
    }
});