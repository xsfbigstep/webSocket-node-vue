const { getUserDetail, updateUser, updateFriendMarkName } = require('../dao/user')

// 获取用户详情
exports.getUserDetail = (req, res) => {
  const { uid } = req.query;
  getUserDetail(uid, res);
}
// 更新用户信息
exports.updateUser = (req, res) => {
  const data = req.body;
  updateUser(data, res);
}
// 修改好友昵称
exports.updateFriendMarkName = (req, res) => {
  const data = req.body;
  updateFriendMarkName(data, res);
}