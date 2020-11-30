const jwt = require('jsonwebtoken');
const asyncHandlers = require('./async');
const User = require('../models/User');
const passport = require("passport");


module.exports = (req, res, next) => {
  passport.authenticate('jwt', function(err, user, info) {
      if (err) return next(err);

      if (!user) return res.status(401).json({message: "Unauthorized Access - No Token Provided!"});

      req.user = user;

      next();

  })(req, res, next);
};

// Middleware to protect the route by validating the user token 
// from the Authorization header
exports.protect = asyncHandlers(async (req, res, next) => {

  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1];
  }

  if(!token){
    return res.status(401).json({success: false, data: "Not Authorized"});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return res.status(401).json({success: false, data: "Not Authorized"});
  }
})


//Can be used to set the roles up in the route for authorizing 
//users according to role.
// exports.authorize = (...roles) => {
//   return (req, res, next) => {
//     if(!roles.includes(req.user.role)){
//       return res.status(401).json({success: false, data: "Not Authorized"});
//     }
//     next();
//   }
// }