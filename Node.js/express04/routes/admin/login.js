const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("用户登录");
});

router.get("/dologin", (req, res) => {
  res.send("执行登录");
});

module.exports = router;
