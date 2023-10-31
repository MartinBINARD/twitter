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

// Must apply comparePassword on instance model after schema and model creation
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.local.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
