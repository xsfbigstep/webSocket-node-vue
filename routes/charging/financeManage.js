var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/chargeDayReport/list', function(req, res, next) {
  console.log("调用到接口----------------------")
  res.json({
    errorCode: "0",
    code: 20000,
    data: {
      list: [
        {
          id: Math.random(10000000000).toString(),
          chargeParkNo: "13346467",
          chargePark: "充电站1",
          createdTime: "2022-10-01",
          chargeNum: 26,
          electricityFees: 20,
          serviceCharge: 100,
          totalCost: 230,
          chargingDiscount: 2,
          paidInAmount: 220,
          fcbl: 2,
          fwffc: 2,
          fwfjy: 32
        },
        {
          id: Math.random(10000000000).toString(),
          chargeParkNo: "133464671",
          chargePark: "充电站2",
          createdTime: "2022-10-03",
          chargeNum: 26,
          electricityFees: 20,
          serviceCharge: 100,
          totalCost: 230,
          chargingDiscount: 2,
          paidInAmount: 220,
          fcbl: 2,
          fwffc: 2,
          fwfjy: 32
        }
      ],
      total: 2
    },
    message: "执行成功!"
  })
});

module.exports = router;
