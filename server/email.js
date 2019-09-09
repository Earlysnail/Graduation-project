'use strict';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({ 
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
    user: '893435732@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'cwfckvdsdkbcbbhg',
    }
});


exports.sendEmail = function (to, subject, html, res) {
    const mailOptions = {
        from: '"qq邮箱" <893435732@qq.com>',
        to: to,
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.status(504).end('通知邮件发送失败')
        } else {
            console.log('Message sent: ' + info.response)
        }
    })
}