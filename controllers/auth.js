const asyncHandlers = require('../middleware/async');
const User = require('../models/User');
const Token = require('../models/Token');
const {sendEmail} = require('../utils/index');


// @Method: POST
// @Route : api/auth/register 
// @Desc  : Handling the user registration
exports.register = asyncHandlers(async (req, res, next) => {

  const { firstName, lastName, userName, email, password, confirmPassword, role } = req.body;

  if (role == 'customer') {
    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "Please enter all the fields." });
    }  
  } else {
    if (!firstName || !lastName || !userName || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "Please enter all the fields." });
    }  
  }

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  if (role == 'customer') {
    user = await User.create({
      userName, email, password, role
    });
  } else {
    user = await User.create({
      firstName, lastName, userName, email, password, role
    });
  }
  

  await sendVerificationEmail(user, req, res);

  const token = user.getSignedJwtToken();

  return res.status(200).json({ success: true, token: token });
})


// @Method: POST
// @Route : api/auth/login 
// @Desc  : Logging in the user
exports.login = asyncHandlers(async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Please enter all the fields." });
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(404).json({ success: false, message: "Invalid Creds.." });
  }

  const isMatch = await user.verifyPassword(password);

  if (!isMatch) {
    return res.status(404).json({ success: false, message: "Invalid Creds.." });
  }

  const token = user.getSignedJwtToken();

  return res.status(200).json({ success: true, token: token });

})

// @Method: GET
// @Route : api/auth/me 
// @Desc  : Get the user on load if token available in browser
exports.getMe = asyncHandlers(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  return res.status(200).json({ success: true, data: user });
})



// ===EMAIL VERIFICATION
// @route GET api/verify/:token
// @desc Verify token
// @access Public
exports.verify = async (req, res) => {
  if(!req.params.token) return res.status(400).json({message: "We were unable to find a user for this token."});

  try {
      // Find a matching token
      const token = await Token.findOne({ token: req.params.token });

      if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token my have expired.' });

      // If we found a token, find a matching user
      User.findOne({ _id: token.userId }, (err, user) => {
          if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });

          if (user.isVerified) return res.status(400).json({ message: 'This user has already been verified.' });

          // Verify and save the user
          user.isVerified = true;
          user.save(function (err) {
              if (err) return res.status(500).json({message:err.message});

              return res.status(200).send("The account has been verified. Please log in.");
          });
      });
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

// @route POST api/resend
// @desc Resend Verification Token
// @access Public
exports.resendToken = async (req, res) => {
  try {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) return res.status(401).json({ message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

      if (user.isVerified) return res.status(400).json({ message: 'This account has already been verified. Please log in.'});

      await sendVerificationEmail(user, req, res);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
};

async function sendVerificationEmail(user, req, res){
  try{
      const token = user.generateVerificationToken();

      console.log(token);
      // Save the verification token
      await token.save();

      let subject = "Account Verification Token";
      let to = user.email;
      let from = process.env.FROM_EMAIL;
      let link="http://"+ req.headers.host +"/api/auth/verify/"+ token.token;
      let html = `<p>Hi ${user.userName} <p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                <br><p>If you did not request this, please ignore this email.</p>`;

       await sendEmail({to, from, subject, html});

       //return res.status(200).json({message: 'A verification email has been sent to ' + user.email + '.'});

  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}