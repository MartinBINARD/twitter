require("dotenv").config();
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = schema({
  username: { type: String, required: true, unique: true },
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  avatar: { type: String, default: "/images/default-avatar.svg" },
});

// hash password during schema creation and before model creation
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUND));
};

// Must apply comparePassword on instance model after schema and model creation
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.local.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
