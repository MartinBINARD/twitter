exports.signupForm = (req, res, next) => {
  res.render("users/user-form", { errors: null });
};

exports.signup = (req, res, next) => {
  const { email, password, username } = req.body;
};
