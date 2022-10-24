const { buildUser, checkHasUser, login } = require('../dao/user')

// 用户注册
exports.signUp = (req, res) => {
  const {name, email, pwd} = req.body;
  buildUser(name,email,pwd,res);
}
// 校验User表中是否存在用户
exports.checkHasUser = (req, res) => {
  const {name, email} = req.body;
  checkHasUser(email, name ? 'name' : 'email', res);
}

// 用户登录
exports.login = (req, res) => {
  let {name, email}=req.body;
  console.log(name,'name')
  login({name,email}, res);
}