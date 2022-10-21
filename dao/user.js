const db = require("../config/db/mongodb");
const { message }  = require("../model/user");

exports.getUser = (res) => {
  console.log(message)
  message.find((err, data) => {
    if(err){
      res.send(err);
    } else {
      res.send(data)
    }
  })
}