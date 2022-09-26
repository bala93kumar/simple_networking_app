const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("home-guest");
});

router.get("/about", function (req, res) {
  res.send("thiis is from about page");
});

module.exports = router;
