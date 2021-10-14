const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("前台管理中心");
});

module.exports = router;
