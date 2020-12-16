const express = require('express');
const {addItemToCart, getCart, emptyCart} = require('../controllers/cart');
const router = express.Router();

router.post('/addItemToCart', addItemToCart);
router.get('/', getCart);
router.delete('/empty-cart', emptyCart);

module.exports = router;


