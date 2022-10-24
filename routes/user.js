var express = require('express');
var router = express.Router();
const { sendMail } = require("../dao/email")
const { getUserDetail, updateUser, updateFriendMarkName } = require("../server/server")
const { signUp, checkHasUser, login } = require("../server/signUp")
const { searchUser, isFriend, searchGroup, isInGroup } = require("../server/search");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册页面 用户注册
router.post('/signUp', (req, res) => {
  signUp(req, res);
})

// 校验User表中是否存在用户
router.get('/checkHasUser', (req, res) => {
  checkHasUser(req, res)
})
// 登陆
router.post('/login',(req,res)=>{
  login(req, res);
});
// 搜索用户
router.get('/searchUser',(req,res)=>{
  searchUser(req, res);
});
// 是否为好友
router.get('/isFriend',(req,res)=>{
  isFriend(req, res);
});
// 搜索群
router.get('/searchGroup',(req,res)=>{
  searchGroup(req, res);
});
// 是否群成员
router.get('/isInGroup',(req,res)=>{
  isInGroup(req, res);
});
// 获取用户详情
router.get('/getUserDetail', (req, res) => {
  getUserDetail(req, res);
})
// 更新用户信息
router.post('/updateUser', (req, res) => {
  updateUser(req, res);
})
// 修改好友昵称
router.post('/updateFriendMarkName', (req, res) => {
  updateFriendMarkName(req, res);
})
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
