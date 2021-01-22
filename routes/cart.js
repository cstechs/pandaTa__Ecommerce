const express = require("express");
const {
  addItemToCart,
  getCart,
  emptyCart,
  subtractQuantityCart,
  addQuantityCart,
  removeProductCart,
  removeCart,
} = require("../controllers/cart");
const router = express.Router();

router.post("/addItemToCart", addItemToCart);
router.get("/", getCart);
router.patch("/subtractcartquantity", subtractQuantityCart);
router.patch("/addquantitycart", addQuantityCart);
router.delete("/removeproductcart/:createdby/:productId", removeProductCart);
router.delete("/removeCart/:id", removeCart);

module.exports = router;
