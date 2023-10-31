const { app } = require("../app");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { findUserPerEmail, findUserPerId } = require("../queries/users.queries");

app.use(passport.initialize());
// use sessions with passport
app.use(passport.session());

/* 
    For each request, the session is retrieved by express-session using
    the session id in the cookie.
    Passport gets the _id of the user in the session and executes this method.
    We get the user with its _id and return it to Passport with done(null, user).
    Passport will then put it on req.user
*/

// user login : store only user id to avoid overloading session
passport.serializeUser((user, done) => {
  // store error to null and user id
  done(null, user._id);
});

// user logout
passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserPerId(id);
    done(null, user);
  } catch (e) {
    done(e);
  }
});

/*
    Local strategy settings
    User email is used as credential so usernameFeild key is passed
    IF user found :
        - Compare hash password
            IF match :
                - user login
            ESLE : wrong password
    ELSE : user not found
*/

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await findUserPerEmail(email);
        if (user) {
          const match = await user.comparePassword(password);

          if (match) {
            done(null, user);
          } else {
            done(null, false, { message: "Wrong password" });
          }
        } else {
          done(null, false, { message: "User not found" });
        }
      } catch (e) {
        done(e);
      }
    }
  )
);
