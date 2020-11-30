const express = require('express');
const {createCategory, getCategory, getCategoryById, removeCategory, updateCategory} = require('../controllers/category');
const router = express.Router();
router.post('/createCategory', createCategory);
router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.delete('/:id', removeCategory);
router.patch('/:id', updateCategory);
module.exports = router;