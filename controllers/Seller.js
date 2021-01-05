const Seller = require("../models/Seller");
const Token = require("../models/token");
const { sendEmail } = require("../utils/index");

// @route GET admin/seller
// @desc Returns all sellers
// @access Public
exports.index = async function (req, res) {
  const sellers = await Seller.find({});
  res.status(200).json({ sellers });
};

// @Method: POST
// @Route : api/seller/register
// @Desc  : Handling the seller registration
exports.register = async (req, res, next) => {
  const {
    userFirstName,
    userMiddleName,
    userLastName,
    userName,
    userEmail,
    userBio,
    userTitle,
    userAddress,
    userAppartment,
    userCity,
    userZipCode,
    userCountry,
    userPhNumber,
    userpassword,
    businessName,
    businessType,
    businessMainSaleChannel,
    businessYearEstablish,
    businessIdentityType,
    businessIdNumber,
    fbSocialAccountLink,
    pinterestSocialAccountLink,
    twitterSocialAccountLink,
    instagramSocialAccountLink,
    hearAboutPandata,
  } = req.body;

  let userImage = req.file.filename;

  if (
    !userFirstName ||
    !userLastName ||
    !userName ||
    !userEmail ||
    !userpassword ||
    !userPhNumber
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter all the fields." });
  }

  let seller = await Seller.findOne({ userEmail });

  if (seller) {
    return res
      .status(400)
      .json({ success: false, message: "Seller already exists" });
  }

  seller = await Seller.create({
    userFirstName,
    userMiddleName,
    userLastName,
    userName,
    userEmail,
    userBio,
    userTitle,
    userAddress,
    userAppartment,
    userCity,
    userZipCode,
    userCountry,
    userPhNumber,
    userpassword,
    businessName,
    businessType,
    businessMainSaleChannel,
    businessYearEstablish,
    businessIdentityType,
    businessIdNumber,
    fbSocialAccountLink,
    pinterestSocialAccountLink,
    twitterSocialAccountLink,
    instagramSocialAccountLink,
    hearAboutPandata,
    userImage,
  });

  await sendVerificationEmailToSeller(seller, req, res);
};

// @Method: POST
// @Route : api/seller/login
// @Desc  : Logging in the seller
exports.login = async (req, res, next) => {
  try {
    const { userEmail, userpassword } = req.body;

    const seller = await Seller.findOne({ userEmail });

    if (!seller)
      return res.status(401).json({
        message:
          "The email address " +
          userEmail +
          " is not associated with any account. Double-check your email address and try again.",
      });

    //validate password
    if (!seller.comparePassword(userpassword))
      return res.status(401).json({ message: "Invalid Creds.." });

    // Make sure the user has been verified
    if (!seller.isVerified)
      return res.status(401).json({
        type: "not-verified",
        message: "Your account has not been verified.",
      });

    // Login successful, write token, and send back user
    res.status(200).json({ token: seller.generateJWT(), seller: seller });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function sendVerificationEmailToSeller(seller, req, res) {
  try {
    const token = seller.generateVerificationToken();

    // Save the verification token
    await token.save();

    let subject = "Account Verification Token";
    let to = seller.userEmail;
    let from = process.env.FROM_EMAIL;
    let link = "http://" + process.env.APPURL + "/verify/" + token.token;
    let html = `<p>Hi ${
      seller.userFirstName + " " + seller.userLastName
    }<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                  <br><p>If you did not request this, please ignore this email.</p>`;

    await sendEmail({ to, from, subject, html });

    res.status(200).json({
      message:
        "A verification email has been sent to " + seller.userEmail + ".",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// ===EMAIL VERIFICATION
// @route GET api/verify/:token
// @desc Verify token
// @access Public
exports.verify = async (req, res) => {
  if (!req.params.token)
    return res
      .status(400)
      .json({ message: "We were unable to find a user for this token." });

  try {
    // Find a matching token
    const token = await Token.findOne({ token: req.params.token });

    if (!token)
      return res.status(400).json({
        message:
          "We were unable to find a valid token. Your token my have expired.",
      });

    // If we found a token, find a matching user
    Seller.findOne({ _id: token.userId }, (err, seller) => {
      if (!seller)
        return res
          .status(400)
          .json({ message: "We were unable to find a user for this token." });

      if (seller.isVerified)
        return res
          .status(400)
          .json({ message: "This user has already been verified." });

      // Verify and save the user
      seller.isVerified = true;
      seller.save(function (err) {
        if (err) return res.status(500).json({ message: err.message });

        res.status(200).send("The account has been verified. Please log in.");
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSellerById = async (req, res) => {
  try {
    let id = req.params.id;
    const seller = await Seller.findById(id);
    res.status(200).json({ success: true, data: seller });
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
