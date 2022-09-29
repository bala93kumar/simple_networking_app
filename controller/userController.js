const User = require("../models/User");

exports.home = function (req, res) {
  res.render("home-guest");
};

exports.register = function (req, res) {
  //   res.send("thank you for registering");
  //   console.log(req.body);
  let user = new User(req.body);
  user.register();

  // console.log(user);
  if (user.errors.length) {
    res.send(user.errors);
  } else {
    res.send("user registerd");
  }

  // res.send("thanks for  trying to register");
};

exports.login = function (req, res) {
  // res.send("user login captured");
  let user = new User(req.body);
  user
    .login()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (err) {
      res.send(err);
    });
};
