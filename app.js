const express = require("express");
const app = express();

// first param std views name from express , second param folder name
app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home-guest");
});

app.listen(3000);
