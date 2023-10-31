require("dotenv").config();
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = schema({
  username: { type: String, required: true },
  local: {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
});

// hash password during schema creation and before model creation
userSchema.statics.hasPassword = (password) => {
  return bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUND));
};

const User = mongoose.model("user", userSchema);

module.exports = User;
