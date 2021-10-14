var mongoose = require("./db");

var NewsSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number,
    default: 1,
  },
});

var NewsModel = mongoose.model("News", NewsSchema, "news");

module.exports = NewsModel;
