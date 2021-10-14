var mongoose = require("./db");

var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number, //设置类型
    default: 1, //设置默认参数
  },
  pic: {
    type: String, //设置类型
    set(parmas) {
      if (!parmas) {
        return "";
      } else {
        if (parmas.indexOf("http://") != 0 && parmas.indexOf("https://") != 0) {
          return "http://" + parmas;
        }
        return parmas;
      }
    },
  },
});

var UserModel = mongoose.model("User", UserSchema, "user");

module.exports = UserModel;
