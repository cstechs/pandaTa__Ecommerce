const Seller = require("../models/Seller");

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

  // let userImage = req.file.filename;

  // userImage = userImage.replace("C:\\fakepath\\", "");

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
  });

  //await sendVerificationEmail(seller, req, res);

  //const token = seller.getSignedJwtToken();

  //return res.status(200).json({ success: true, token: token });
  return res.status(200).json({ success: true });
};

// @Method: POST
// @Route : api/seller/login
// @Desc  : Logging in the seller
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("em", email, "pw", password);
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter all the fields." });
  }

  const seller = await Seller.findOne({ email }).select("+password");

  if (!seller) {
    return res.status(404).json({ success: false, message: "Invalid Creds.." });
  }

  const isMatch = await seller.verifyPassword(password);

  if (!isMatch) {
    return res.status(404).json({ success: false, message: "Invalid Creds.." });
  }

  const token = seller.getSignedJwtToken();

  return res.status(200).json({ success: true, token: token });
};

//////In Seller router
