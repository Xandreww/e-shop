const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  try {
    const result = await Product.find();
    if (!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
