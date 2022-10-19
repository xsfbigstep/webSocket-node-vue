const mongoose = require('mongoose');
const db = mongoose.createConnection("mongodb://localhost:27017/nodeWebSocket");
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库连接成功!')
});

module.exports = db;