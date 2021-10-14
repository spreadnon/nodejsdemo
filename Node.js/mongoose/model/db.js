const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/eggcms", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("数据库链接成功");
});

module.exports = mongoose;
