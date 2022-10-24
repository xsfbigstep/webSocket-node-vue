const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const Schema = mongoose.Schema;
// 群成员表
const groupUserSchema = Schema({
  groupId:{                       // 群id
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  userId: {                       // 用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,                   // 群名
  tip: {                          // 未读消息数
    type: Number,
    default: 0
  },
  time: Date,                     // 加入时间
  shield: Number                  // 是否屏蔽群消息[0不屏蔽1屏蔽]
})

const GroupUser = db.model('GroupUser', groupUserSchema);
module.exports = { GroupUser }