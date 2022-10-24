// 响应结果类
const Result  = require("./Result");
// 用户表
const { User } = require("./User");
// 好友表
const { Friend } = require("./Friend");
// 一对一消息表
const { Message } = require("./Message");
// 群表
const { Group } = require("./Group");
// 群成员表
const { GroupUser } = require("./GroupUser");
// 群消息表
const { GroupMessage } = require("./GroupMessage");

module.exports = {
  User,
  Friend,
  Message,
  Group,
  GroupUser,
  GroupMessage,
  Result
}