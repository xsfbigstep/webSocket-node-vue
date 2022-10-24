var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser")
// 白名单[不需要验证token的api地址]
const whiteList = require("./config/whiteList")
// 验证token
const { verifyToken } = require("./dao/jwt")
const { Result }  = require("./model/dbmodel");
// 连接数据库
require("./config/db/mongodb")


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

var app = express();

// 跨域解决,在app.js中引入模块
var cors = require('cors')
// 解决跨域(建议将此项配置放在所有app.use()的最上方)
app.use(cors())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 解析 application/json
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// token前置验证
// app.use((req,res,next) => {
//   if(!whiteList.noTokenWhiteList.includes(req.path)) {
//     //判断请求头是否携带正确的token
//     verifyToken(req.headers.authorization).then(res => {
//         next()
//     }).catch(e => {
//       new Result('token验证失败').fail(res);
//     })
//   } else {
//       next()
//   }
// })

app.use('/', indexRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
