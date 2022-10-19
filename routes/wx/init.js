var express = require('express');
var router = express.Router();
// 微信sdk接口授权
var wechat = require('../../lib/wx/wechat');

// 获取微信accessToken, 【服务器一启动就会调用】
wechat.getAccessToken().then(token => {
  global.accessToken = token
})

//校验请求
router.get('/', wechat.init);

module.exports = router;
