const express = require('express');
const {createChat, getChat, removeChat} = require('../controllers/Chat');
const router = express.Router();
router.post('/createChat', createChat);
router.get('/', getChat);
router.delete('/:id',removeChat);
module.exports = router;