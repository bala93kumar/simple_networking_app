const User = require("../models/User");

exports.home = function (req, res) {
  res.render("home-guest");
};

exports.register = function (req, res) {
  //   res.send("thank you for registering");
  //   console.log(req.body);
  let user = new User(req.body);
  res.send("thanks for registereing");
};
