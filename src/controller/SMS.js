zn.define(function (){

    /**
     * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
     * Created on 2017-07-31
     */
    const SMSClient = require('@alicloud/sms-sdk');
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAIiuPpTEkaNZO4';
    const secretAccessKey = 'xYK7A1SxyOwoeb5WK6laniEDyRY5oH';


    return zn.Controller('sms', {
        methods: {
            init: function (){
                zn.smsClient = new SMSClient({accessKeyId, secretAccessKey});
            },
            getCode: {
                method: 'POST',
                argv: {
                    phone: null
                },
                value: function (request, response, chain){
                    var _code = zn.util.randomNumbers(6),
                        _phone = request.getValue('phone');
                    zn.smsClient.sendSMS({
                        PhoneNumbers: _phone,
                        SignName: '腾麟传媒',
                        TemplateCode: 'SMS_120376030',
                        TemplateParam: '{"code":"'+_code+'"}'
                    }).then(function (res) {
                        if (res.Code === 'OK') {
                            //处理返回参数
                            console.log(res);
                            this.query(zn.sql.insert({
                                table: 'zn_adinstall_user_sms',
                                values: {
                                    phone: _phone,
                                    code: _code
                                }
                            }));
                            response.success('发送成功');
                        }else {
                            console.error(res);
                            response.error('发送失败');
                        }
                    }.bind(this), function (err) {
                        console.error(err);
                        response.error('发送失败');
                    });
                }
            }
        }
    });

});
