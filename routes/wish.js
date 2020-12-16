const express = require('express');
const {addItemToWish, getWish, emptyItem,getwishById, removeWishlist} = require('../controllers/wish');
const router = express.Router();

router.post('/addItemToWish', addItemToWish);
router.get('/', getWish);
router.delete('/empty-item', emptyItem);
router.get("/:id", getwishById);
router.delete('/:id', removeWishlist);
module.exports = router;
