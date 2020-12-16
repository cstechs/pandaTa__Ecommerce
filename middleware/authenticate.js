//A middleware attached to a user endpoints the middleware check and authenticate the jwt token passed before accessing the user

const passport = require("passport");

module.exports = (req, res, next) => {
  //This authenticate method called in route.js
  passport.authenticate("jwt", function (err, user, info) {
    if (err) return next(err);

    if (!user)
      return res
        .status(401)
        .json({ message: "Unauthorized Access - No Token Provided!" });

    req.user = user;

    next();
  })(req, res, next);
};
