const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
// 用户表
const userSchema = mongoose.Schema({
  name: String, // 用户名
  age: Number, // 年龄
  pwd: String, // 密码
  email: String, // 邮箱
  sex: { // 性别
    type: String, default: 'asexual'
  },
  birth: Date, // 生日
  phone: Number, // 手机
  explain: String, // 介绍
  imgUrl: { // 用户头像
    type: String,
    default: 'user.png'
  },
  register: Date  // 注册时间
});
// 好友表
const friendSchema = mongoose.Schema({
  userId: String, // 用户id
  friendId: Number, // 好友id
  state: String, // 密码
  time: String, // 邮箱
});
const User = db.model('User', userSchema);

module.exports = User;