const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("导航列表");
});

router.get("/add", (req, res) => {
  res.render("/admin/nav/add");
});

router.get("/doadd", (req, res) => {
  res.send("执行增加");
});

router.get("/edit", (req, res) => {
  res.send("修改导航");
});

router.get("/doedit", (req, res) => {
  res.send("执行修改");
});

module.exports = router;
