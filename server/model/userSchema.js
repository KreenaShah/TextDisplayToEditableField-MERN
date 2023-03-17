const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, require: true ,default:"lol fullname"},
  email: { type: String, require: true , default:"lol email" },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
