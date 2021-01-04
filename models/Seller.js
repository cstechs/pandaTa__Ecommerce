const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const Token = require("../models/token");

const SellerSchema = mongoose.Schema(
  {
    userFirstName: {
      type: String,
    },
    userMiddleName: {
      type: String,
    },
    userLastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    userTitle: {
      type: String,
    },
    userAddress: {
      type: String,
    },
    userAppartment: {
      type: String,
    },
    userCity: {
      type: String,
    },
    userZipCode: {
      type: String,
    },
    userCountry: {
      type: String,
    },
    userPhNumber: {
      type: String,
    },
    userBio: {
      type: String,
    },
    userpassword: {
      type: String,
    },
    businessName: {
      type: String,
    },
    businessType: {
      type: String,
    },
    businessMainSaleChannel: {
      type: String,
    },
    businessYearEstablish: {
      type: String,
    },
    businessIdentityType: {
      type: String,
    },
    businessIdNumber: {
      type: String,
    },
    fbSocialAccountLink: {
      type: String,
    },
    role: {
      type: String,
      default: "seller",
    },
    pinterestSocialAccountLink: {
      type: String,
    },
    twitterSocialAccountLink: {
      type: String,
    },
    instagramSocialAccountLink: {
      type: String,
    },
    hearAboutPandata: {
      type: String,
    },
    userImage: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

SellerSchema.pre("save", function (next) {
  const seller = this;

  if (!seller.isModified("userpassword")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(seller.userpassword, salt, function (err, hash) {
      if (err) return next(err);

      seller.userpassword = hash;
      next();
    });
  });
});

SellerSchema.methods.comparePassword = function (userpassword) {
  return bcrypt.compareSync(userpassword, this.userpassword);
};

SellerSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: this._id,
    userEmail: this.userEmail,
    userName: this.userName,
    userFirstName: this.userFirstName,
    userLastName: this.userLastName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};

SellerSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

SellerSchema.methods.generateVerificationToken = function () {
  let payload = {
    userId: this._id,
    token: crypto.randomBytes(20).toString("hex"),
  };

  return new Token(payload);
};

module.exports = mongoose.model("Seller", SellerSchema);
