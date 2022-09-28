const validator = require("validator");

const db_collection = require("../db").collection("usersList");

let User = function (data) {
  this.act_data = data;
  this.errors = [];
};

User.prototype.cleanUp = function () {
  this.act_data = {
    username: this.act_data.username.trim().toLowerCase(),
    email: this.act_data.email.trim().toLowerCase(),
    password: this.act_data.password,
  };
};

User.prototype.validate = function () {
  if (this.act_data.username.length == 0) {
    this.errors.push("username must not be empty");
  }
  if (this.act_data.email == 0) {
    this.errors.push("email must not be empty");
  }
  if (this.act_data.password == 0) {
    this.errors.push("password must not be empty");
  }
  if (this.act_data.password.length > 0 && this.act_data.password.length < 5) {
    this.errors.push("password must be atleast of 5 characters");
  }
  if (this.act_data.username.length > 0 && this.act_data.username.length < 5) {
    this.errors.push("username must be atleast of 5 characters");
  }
  if (this.act_data.username == this.act_data.password) {
    this.errors.push("username and password cannot be same");
  }
  if (!validator.isEmail(this.act_data.email)) {
    this.errors.push("enter a valid email");
  }
};

User.prototype.register = function () {
  // step 1 :validate
  this.cleanUp();
  this.validate();

  // step 2 : if there are  no error save user to db

  if (this.act_data.errors != 0) {
    db_collection.insertOne(this.act_data);
  }
};

module.exports = User;
