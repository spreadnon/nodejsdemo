//1.引入mongoose
const mongoose = require("mongoose");

//2.建立连接
mongoose.connect("mongodb://127.0.0.1:27017/eggcms");

//3.操作user表（集合） 表结构   定义一个schema
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});

//4.定义数据库模型，操作数据库
//注意：1.第一个参数 首字母大写 2.要和数据库表（集合）名称对应
//这个模型会和模型名称相同的复数的数据库表建立连接
var User = mongoose.model("User", UserSchema, "user");

//查询数据
// User.find({}, (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

//增加数据
//1. 实例化 model
// var u = new User({
//   name: "王五",
//   age: 80,
//   status: 1,
// });

// u.save(function (err, doc) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

//更新数据
// User.updateOne(
//   { _id: "61668db00ef94fe80617c469" },
//   { name: "里斯本111" },
//   (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("修改成功！" + res);
//   }
// );

//删除数据
User.deleteOne({ _id: "616697b2c762d8c2bd04fed1" }, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("删除成功！" + res);
});
