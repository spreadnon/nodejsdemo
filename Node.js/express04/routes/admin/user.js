const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("用户列表");
});

router.get("/add", (req, res) => {
  res.send("增加用户");
});

router.post("/doadd", (req, res) => {
  res.send("执行增加");
});

router.get("/edit", (req, res) => {
  res.send("修改用户");
});

router.post("/doedit", (req, res) => {
  res.send("执行修改");
});

module.exports = router;
