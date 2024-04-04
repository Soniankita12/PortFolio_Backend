const mongoose = require("mongoose");

const AdminModel = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports =  mongoose.model("admin", AdminModel) ;
