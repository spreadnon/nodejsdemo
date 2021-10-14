const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("api管理中心");
});

module.exports = router;
