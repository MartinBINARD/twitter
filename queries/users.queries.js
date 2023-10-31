const User = require("../database/models/user.model");

exports.createUser = async (user) => {
  try {
    const hashPassword = await User.hashPassword(user.password);

    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashPassword,
      },
    });

    return newUser.save();
  } catch (error) {
    throw e;
  }
};
