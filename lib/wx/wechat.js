const wxConfig = require("./config/wx.js");
const fs = require("fs");
const path = require("path");
const sha1 = require("sha1");
const request = require("request");

function Wechat() {
  (this.appId = wxConfig.appId),
    (this.appSecret = wxConfig.appSecret),
    (this.token = wxConfig.token);
}

//校验请求是否来自微信
Wechat.prototype.init = function (req, res, next) {
  var token = wxConfig.token;
  var signature = req.query.signature;
  var nonce = req.query.nonce;
  var timestamp = req.query.timestamp;
  var echostr = req.query.echostr;
  // 我们自己的服务器计算得出signatrue微信加密签名，和微信传递过来的signatrue进行对比，如果一样，说明消息来自微信服务器并返回echostr给微信服务器，如果不是微信服务器返回error
  var str = [token, timestamp, nonce].sort().join("");
  var sha = sha1(str);

  if (sha === signature) {
    // res.send(echostr);
    next()
  } else {
    res.send("error");
  }
};

//获取access_token
Wechat.prototype.getAccessToken = function () {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, "./token.txt"), (err, data) => {
      if (!err) {
        // 文件读取成功
        accessToken = JSON.parse(data);
        // console.log(accessToken, "accessToken");
        if (accessToken.expires_in > Date.parse(new Date())) {
          resolve(accessToken.access_token);
        } else {
          //已过期
          this.updateAccessToken();
        }
      } else {
        //文件为空
        this.updateAccessToken();
        reject("getAccessToken异常" + err);
      }
    });
  });
};

//从微信重新拉取access_token
Wechat.prototype.updateAccessToken = function () {
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.appId}&secret=${this.appSecret}`;
  // 返回accesstoken格式如下
  // {
  //     "access_token":"string",
  //     "expires_in":7200
  // }
  return new Promise((resolve, reject) => {
    request(url, function (err, response, body) {
      var accessToken = JSON.parse(response.body);
      accessToken["expires_in"] = Date.parse(new Date()) + (7200 - 20) * 1000;
      fs.writeFileSync(
        path.resolve(__dirname, "./token.txt"),
        JSON.stringify(accessToken)
      );
      resolve(accessToken.access_token);
    });
  });
};

module.exports = new Wechat();
