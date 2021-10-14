const express = require("express");
const app = express();

//应用级中间件
app.use((req, res, next) => {
  console.log(new Date());
  next();
});

app.get("/", function (req, res) {
  var title = "你好ejs";
  res.render("index", {
    title: title,
  });
});
