const nodemailer = require('nodemailer');
const email = require("../config/email")

// 创建传输方式
const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: email.qq.user,
    pass: email.qq.pass
  }
});

// 发送邮件给用户
exports.sendMail = (toEmail, res) => {
  console.log(111)
  // 发送信息内容
  let options = {
    from: email.qq.user,
    to: toEmail,
    subject: `测试邮箱发送功能`, // 邮箱标题
    html: `邮箱内容` // 邮箱内容
  }
  console.log(888)
  // 发送邮件
  transporter.sendMail(options, (err, msg) => {
    if(err){
      console.log(err)
    }else{
      res.send('邮箱发送成功')
    }
  })
}