var express = require('express');
var router = express.Router();
const { getUser } = require("../dao/user")
const { sendMail } = require("../dao/email")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 测试获取用户数据
router.get('/getUser', function(req, res, next) {
  getUser(res);
});
router.post('/sendMail', function(req, res) {
  const email = req.body.email;
  console.log(email)
  try {
    sendMail(email, res)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router;
