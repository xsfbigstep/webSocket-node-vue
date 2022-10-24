const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const Schema = mongoose.Schema;
// 好友表
const friendSchema = Schema({
  userId: {                       // 用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, 
  friendId: {                     // 好友id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },     
  markName: String,               // 好友昵称          
  state: Number,                  // 好友状态(0已为好友,1)
  time: String,                   // 生成时间
});

const Friend = db.model('Friend', friendSchema);
module.exports = { Friend }