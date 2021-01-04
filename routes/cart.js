const express = require("express");
const {
  addItemToCart,
  getCart,
  emptyCart,
  subtractQuantityCart,
  addQuantityCart,
  removeProductCart,
} = require("../controllers/cart");
const router = express.Router();

router.post("/addItemToCart", addItemToCart);
router.get("/", getCart);
//router.delete("/empty-cart", emptyCart);
router.patch("/subtractcartquantity", subtractQuantityCart);
router.patch("/addquantitycart", addQuantityCart);
router.delete("/removeproductcart/:createdby/:productId", removeProductCart);

module.exports = router;
