// 用户表
const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const userSchema = mongoose.Schema({
  name: String,
  age: Number
});

const User = db.model('User', userSchema);

module.exports = User;