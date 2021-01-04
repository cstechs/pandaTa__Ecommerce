const Seller = require("../controllers/seller");
const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer().single("userImage");

router.post("/register", upload, Seller.register);
router.post("/login", Seller.login);
router.get("/verify/:token", Seller.verify);
router.get("/", Seller.index);
router.get("/getSellerById/:id", Seller.getSellerById);

module.exports = router;
