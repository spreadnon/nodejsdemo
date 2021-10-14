const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("显示用户登录界面");
});

router.get("/dologin", (req, res) => {
  res.send("执行登录");
});

module.exports = router;
