zn.define({
    host: '0.0.0.0',
    port: 6868,
    catalog: '/',
    node_paths: ['../../zn/'],
    node_modules: ['zn-plugin-admin', 'zn-plugin-wechat', 'zn-plugin-survey'],
    upload: {
        root: __dirname,
        temp: '/web/www/uploads/temp',
        catalog: '/web/www/uploads/catalog'
    },
    databases: {
        'youyangit': {
            //default: true,
            port: 3306,
            type: 'mysql',
            user: 'root',
            host: '0.0.0.0',
            password: '',
            database:''
        },
        'kylinpop': {
            //default: true,
            port: 3306,
            type: 'mysql',
            user: 'root',
            host: '127.0.0.1',
            password: '',
            database:''
        },
        'local': {
            default: true,
            port: 3306,
            type: 'mysql',
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database:''
        }
    },
    wx_youyangit: {
        ID: 'gh_1bb245ad9049',
        AppID: 'wxa65bb816947ca9e3',
        AppSecret: 'e5c72ceec5012757bd484372b39ee7a1',
        CallBackUrl: 'http://shsky.youyangit.com/zn.plugin.wechat/wx/validate',
        Token: 'youyang2017',
        EncodingAESKey: 'KpKi2MoXmWVdp82HkXTlPjA7U4erNQPibRytAzbTbBq'
    },
    wx: {
        ID: 'gh_1bb245ad9049',
        AppID: 'wxf7e304ef7910c5da',
        AppSecret: '5e4cbac777a2c7696673e5d2c1485e3e',
        CallBackUrl: 'http://wx.youyangit.com/znwechat/wx/validate',
        Token: 'youyang2017',
        EncodingAESKey: 'KpKi2MoXmWVdp82HkXTlPjA7U4erNQPibRytAzbTbBq'
    },
    wx_release: {
        ID: 'gh_bc004a1a9747',
        AppID: 'wx6a00bc96652cf528',
        AppSecret: '2fcbc38c1a1b2aad87ae7934eff2a6ff',
        CallBackUrl: 'http://adinstall.service.kylinpop.com/zn.plugin.wechat/wx/validate',
        Token: 'kylinpop2017',
        EncodingAESKey: 'Hpl5RtLd0vHNa8ySLHr0ejPHEX9zqQ95p1GghiNxzqT'
    }
});
