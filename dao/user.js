const db = require("../config/db/mongodb");
const { User, Result, Friend, GroupUser, Group }  = require("../model/dbmodel");
const { createToken } = require("../dao/jwt")

// 新建用户
exports.buildUser = (name,email,pwd,res) => {
  const data = {
    name,
    email,
    pwd,
    time: new Date()
  }
  const user = new User(data);
  user.save((err, result) => {
    if(err){
      new Result({err}, '服务器异常').fail(res)
    }else{
      new Result('注册成功').success(res)
    }
  })
}
/**
 * 校验User表中是否存在用户
 * @param {*} data 用户名|邮箱
 * @param {*} type 字符串[email|name]
 * @param {*} res 响应对象
 */
exports.checkHasUser = (data, type, res) => {
  const wherestr = {};
  wherestr[type] = data;
  User.countDocuments(wherestr, (err, result) => {
    if(err){
      new Result({err}, '服务器异常').fail(res)
    }else{
      new Result({data: result}, 'success').success(res)
    }
  })
}

/**
 * 用户登录
 * @param {*} data user对象(用户名,邮箱,密码)
 * @param {*} res  响应对象
 */
exports.login = (data, res) => {
  let wherestr = {$or:[{name:data.name},{email:data.email}]};
  let out = {name: 1, imgUrl: 1, pwd: 1}
  User.findOne(wherestr,out,(err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      if(result){
        // User表中查找到用户了,向前端返回数据[包含token]
        new Result({id: result._id, name: result.name, imgUrl: result.imgUrl, token: createToken(result._id)}, 'success').success(res)
      }
    }
  })
}
/**
 * 搜索用户
 * @param {*} data 用户名或者邮箱
 * @param {*} res 
 */
exports.searchUser = (data, res) => {
  let wherestr = {$or:[{'name':{$regex:data}},{'email':{$regex:data}}]};
  User.find(wherestr,(err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      new Result( {data: result}, 'success').success(res)
    }
  })
}
/**
 * 是否为好友
 * @param {*} uid 用户id
 * @param {*} fid 好友id
 * @param {*} res 
 */
exports.isFriend = (uid,fid, res) => {
  let wherestr = {userId: uid, friendId:fid, state: 0};
  Friend.find(wherestr,(err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      if(result && result.length > 0){
        // 找到了好友
        new Result('1', 'success').success(res)
      }else{
        new Result('0', '不是好友').success(res)
      }
    }
  })
}
/**
 * 搜索群
 * @param {*} data 群名称
 * @param {*} res 
 */
 exports.searchGroup = (data, res) => {
  let wherestr = {'name':{$regex:data}};
  Group.find(wherestr,(err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      new Result( {data: result}, 'success').success(res)
    }
  })
}
/**
 * 判断是否在群内
 * @param {*} uid 用户id
 * @param {*} gid 群id
 * @param {*} res 
 */
 exports.isInGroup = (uid,gid, res) => {
  let wherestr = {userId: uid, groupId:gid};
  GroupUser.find(wherestr,(err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      if(result && result.length > 0){
        // 在群内
        new Result('1', 'success').success(res)
      }else{
        // 不在群内
        new Result('0', '不是群成员').success(res)
      }
    }
  })
}
/**
 * 获取用户详情
 * @param {*} uid 用户id
 * @param {*} res 
 */
exports.getUserDetail = (uid, res) => {
  const wherestr = {
    '_id': uid
  }
  const out = {
    'pwd': 0
  }
  User.findOne(wherestr, out, (err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      new Result({data: result}, 'success').success(res)
    }
  })
}
/**
 * 修改用户信息
 * @param {*} data  User表对象
 * @param {*} res 
 */
exports.updateUser = (data, res) => {
  User.findByIdAndUpdate(data.id, data, (err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      new Result({result}, 'success').success(res)
    }
  })
}
/**
 * 修改好友昵称
 * @param {*} data 
 * @param {*} res 
 */
exports.updateFriendMarkName = (data, res) => {
  const wherestr = {
    'userId': data.uid,
    'friendId': data.fid
  }
  const updatestr = {
    markName: data.markName
  }
  Friend.updateOne(wherestr, updatestr, (err, result) => {
    if(err){
      new Result(err, '服务器异常').fail(res)
    }else{
      new Result({result}, 'success').success(res)
    }
  })
}