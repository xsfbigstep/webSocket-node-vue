const jwt = require("jsonwebtoken");
//用于加密
const secret = 'nidemiyao'
//生成token
//userId也就是payload是需要存入token的信息
exports.createToken = (userId) => {
  const payload = {
    userId: userId,
    time: new Date()
  }
  let token = jwt.sign(payload, secret, {
      //Token有效时间 单位s
      expiresIn:60 * 60*24
  })
  return token
}
//验证Token
exports.verifyToken = (token) => {
  console.log(token)
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, result) => {
        if(error){
            reject(error)
        } else {
            resolve(result)
        }
    })
  })
}


