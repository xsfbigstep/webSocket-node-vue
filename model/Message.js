const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const Schema = mongoose.Schema;
// 一对一消息表
const messageSchema = Schema({
  userId: {                       // 用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, 
  friendId: {                     // 好友id
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, 
  message: String,                // 消息内容
  types: String,                  // 内容类型
  state: String,                  // 消息状态(0已读,1)
  time: String,                   // 发送时间
})

const Message = db.model('Message', messageSchema);
module.exports = { Message }