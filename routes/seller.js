const Seller = require("../controllers/seller");
const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer().single("profileImage");

router.post("/register", upload, Seller.register);
router.post("/login", Seller.login);

module.exports = router;
