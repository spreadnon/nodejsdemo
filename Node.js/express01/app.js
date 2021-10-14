const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("你好 express");
});

app.get("/article", function (req, res) {
  res.send("新闻界面");
});

app.get("/login", function (req, res) {
  res.send("登录");
});

app.get("/register", function (req, res) {
  res.send("注册");
});

app.post("/doLogin", function (req, res) {
  console.log("执行登录");
  res.send("执行登录");
});

app.put("/editUser", function (req, res) {
  console.log("修改用户");
  res.send("修改用户");
});

app.delete("/deleteUser", function (req, res) {
  console.log("删除用户");
  res.send("删除用户");
});

app.get("/admin/user", function (req, res) {
  res.send("admin user");
});

//动态路由
app.get("/article/:id", function (req, res) {
  var id = req.params["id"];
  console.log(id);
  res.send("动态路由" + id);
});

//获取 get 传值 product?id=123&cid=123
app.get("/product", function (req, res) {
  let query = req.query;
  console.log(query);
  res.send("动态路由" + query.id);
});

app.listen(3000);
