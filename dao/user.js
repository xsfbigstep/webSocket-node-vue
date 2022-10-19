const db = require("../config/db/mongodb");
const User = require("../model/user");

exports.getUser = (res) => {
  console.log(User)
  User.find((err, user) => {
    if(err){
      res.send(err);
    } else {
      res.send(user)
    }
  })
}