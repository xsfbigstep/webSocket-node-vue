var express = require('express');
var router = express.Router();
const { getUser } = require("../dao/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 测试获取用户数据
router.get('/getUser', function(req, res, next) {
  console.log(8)
  getUser(res);
});

module.exports = router;
