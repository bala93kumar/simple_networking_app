const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router_imported = require("./router");
// first param std views name from express , second param folder name
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.render("home-guest");
// });

app.use("/", router_imported);

// app.listen(3000);

module.exports = app;
