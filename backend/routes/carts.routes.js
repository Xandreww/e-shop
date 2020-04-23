const express = require('express');
const router = express.Router();

const CartController = require('../controllers/carts.controller');

router.get('/carts', CartController.getCarts);
router.get('/carts/:id', CartController.getId);
router.post('/carts', CartController.add);

module.exports = router;
