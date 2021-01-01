const mongoose = require("mongoose");

const SellerSchema = mongoose.Schema(
  {
    userMiddleName: {
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
  },
  { timestamps: true }
);
module.exports = mongoose.model("Seller", SellerSchema);
