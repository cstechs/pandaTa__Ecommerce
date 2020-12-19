const express = require("express");
const multerInstance = require("../config/multer");

const {
  createProduct,
  getProduct,
  getProductById,
  removeProduct,
  updateProduct,
  getProductBySubCategoryId,
} = require("../controllers/product");
const router = express.Router();
router.post(
  "/createProduct",
  multerInstance.upload.single("productImage"),
  createProduct
);
// multerInstance.upload.single('image'), createProduct);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.delete("/:id", removeProduct);
router.patch(
  "/:id",
  multerInstance.upload.single("productImage"),
  updateProduct
);
router.get("/getProductBySubCategoryId/:id", getProductBySubCategoryId);
module.exports = router;
