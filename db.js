const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(
  `mongodb+srv://${process.env.Name}:${process.env.PASSWORD}@cluster0.sibmaoa.mongodb.net/complexApp?retryWrites=true&w=majority`
);

async function start() {
  await client.connect();
  module.exports = client.db();
  const app = require("./app");
  app.listen(process.env.PORT);
}

start();
