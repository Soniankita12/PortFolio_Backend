const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_Url);

const connection = mongoose.connection;
connection.on("error", () => {
  console.log("error connecting to db");
});

connection.on("connected", () => {
  console.log("connected to Db");
});

module.exports = connection;
