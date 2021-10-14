console.time("user");
var UserModel = require("./model/user");
console.timeEnd("user");

//增加数据
var user = new UserModel({
  name: "里斯本",
  age: 48,
  pic: "www.baidu.com",
});

user.save(function (err) {
  if (err) {
    console.log(err);
    return;
  }

  //查找数据库
  UserModel.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(docs);
  });
});

// NewsModel.find({}, (err, docs) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(docs);
// });
