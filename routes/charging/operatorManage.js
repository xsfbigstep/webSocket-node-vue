var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/operatorManage/list', function(req, res, next) {
  console.log("调用到接口----------------------")
  res.json({
    errorCode: "0",
    code: 20000,
    data: {
      list: [
        {
          id: Math.random(10000000000).toString(),
          operatorNo: "3346464643", // 运营商编号
          operatorName: "运营商1", // 运营商名称
          phone: "13524611464", // 手机号
          city: "北京", // 所在城市
          chargeNum: 8, // 充电站数量
          chargeProNum: 80, // 充电桩数量
          status: "1", // 账号状态
          createUser: "张三", // 创建人
          createTime: "2022-10-01", // 创建时间
        },
        {
          id: Math.random(10000000000).toString(),
          operatorNo: "3346464643", // 运营商编号
          operatorName: "运营商2", // 运营商名称
          phone: "13524611464", // 手机号
          city: "北京", // 所在城市
          chargeNum: 8, // 充电站数量
          chargeProNum: 80, // 充电桩数量
          status: "1", // 账号状态
          createUser: "李四", // 创建人
          createTime: "2022-10-01", // 创建时间
        }
      ],
      total: 2
    },
    message: "执行成功!"
  })
});

module.exports = router;
