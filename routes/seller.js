const Seller = require("../controllers/seller");
const express = require("express");
const multerInstance = require("../config/multer");

const router = express.Router();
router.post(
  "/register",
  multerInstance.upload.single("userImage"),
  Seller.register
);
router.post("/login", Seller.login);
router.get("/verify/:token", Seller.verify);
router.get("/", Seller.index);
router.get("/getSellerById/:id", Seller.getSellerById);

module.exports = router;
