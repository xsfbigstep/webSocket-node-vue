var express = require("express");
var router = express.Router();
const { parseString } = require('xml2js')
function getXmlToJson(req){
  return new Promise((resolve, reject) => {
    let xmlData = "";    
    req.on("data", (data) => {
      xmlData += data.toString();
    }).on('close', () => {
      parseString(xmlData, function (err, result) {
        const xml = result.xml
        resolve(xml)
      });
    })
  })

}
//校验请求
router.get("/", function (req, res, next) {
  console.log("get req");
  const { echostr } = req.query;
  res.send(echostr);
  console.log(req.query);
});



router.post("/", (req, res, next) => {
  console.log("post req");
  // console.log(req.query);
  // const xmlJson = await getXmlToJson(req)
  // console.log(xmlJson,'xmlJson')
  //       const FromUserName = xmlJson.FromUserName[0]
  //       const ToUserName = xmlJson.ToUserName[0]

  //       let resData = `<xml><ToUserName><![CDATA[${FromUserName}]]></ToUserName><FromUserName><![CDATA[${ToUserName}]]></FromUserName><CreateTime>1662457604</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[回复的内容]]></Content><MsgId>23800671041618598</MsgId></xml>`
  //       res.send(resData)

  let resData = `<xml>
  <ToUserName><![CDATA[oan_SshNBJgPWDU2pkXm6xXWBap4]]></ToUserName>
  <FromUserName><![CDATA[gh_be122f921315]]></FromUserName>
  <CreateTime>1662457604</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[neirong]]></Content>
  <MsgId>23800671041618598</MsgId></xml>`
  res.send(resData)

});

module.exports = router;
