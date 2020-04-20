const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getId);

module.exports = router;
