const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const Schema = mongoose.Schema;
// 群表
const groupSchema = Schema({
  userId: {                       // 用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,                   // 群名
  imgUrl: {                       // 群头像
    type: String,
    default: 'group.png'
  },
  time: Date,                     // 创建时间
  notice: String                  // 群公告
})

const Group = db.model('Group', groupSchema);
module.exports = { Group }