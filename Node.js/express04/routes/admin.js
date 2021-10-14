const express = require("express");

//引入模块
var user = require("./admin/user");
var login = require("./admin/login");
var nav = require("./admin/nav");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("后台管理中心");
});

//配置路由
router.use("/user", user);
router.use("/login", login);
router.use("/nav", nav);

module.exports = router;
