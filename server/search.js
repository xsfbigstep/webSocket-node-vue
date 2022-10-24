const email = require('../config/email');
const { searchUser, isFriend, searchGroup, isInGroup } = require('../dao/user')

// 搜索用户
exports.searchUser = (req, res) => {
  const { name } = req.query;
  searchUser(name, res);
}
// 是否为好友
exports.isFriend = (req, res) => {
  const { uid, fid } = req.query;
  isFriend(uid, fid, res);
}
// 搜索群
exports.searchGroup = (req, res) => {
  const { name } = req.query;
  searchGroup(name, res);
}
// 是否为群成员
exports.isInGroup = (req, res) => {
  const { uid, gid } = req.query;
  isInGroup(uid, gid, res);
}