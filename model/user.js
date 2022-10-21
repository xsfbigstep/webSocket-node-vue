const mongoose = require("mongoose");
// mongodb数据库
const db = require("../config/db/mongodb");
const Schema = mongoose.Schema;
// 用户表
const userSchema = Schema({
  name: String,                       // 用户名
  age: Number,                        // 年龄
  pwd: String,                        // 密码
  email: String,                      // 邮箱
  sex: {                              // 性别
    type: String, default: 'asexual'
  },
  birth: Date,                        // 生日
  phone: Number,                      // 手机
  explain: String,                    // 介绍
  imgUrl: {                           // 用户头像
    type: String,
    default: 'user.png'
  },
  register: Date                      // 注册时间
});
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
  state: String,                  // 好友状态(0已为好友,1)
  time: String,                   // 生成时间
});
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
const user = db.model('user', userSchema);
const friend = db.model('friend', friendSchema);
const message = db.model('message', messageSchema);
const group = db.model('group', groupSchema);
const groupUser = db.model('groupUser', groupUserSchema);
const groupMessage = db.model('groupMessage', groupMessageSchema);


module.exports = {
  user,
  friend,
  message,
  group,
  groupUser,
  groupMessage
}