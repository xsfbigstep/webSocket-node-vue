const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const Schema = mongoose.Schema;
// 群消息表
const groupMessageSchema = Schema({
  groupId:{                       // 群id
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  userId: {                       // 用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: String,                // 群消息
  types: String,                  // 内容类型  
  time: Date,                     // 发送时间
})

const GroupMessage = db.model('GroupMessage', groupMessageSchema);
module.exports = { GroupMessage }