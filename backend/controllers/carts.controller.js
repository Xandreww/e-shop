const Cart = require('../models/cart.model');

exports.getCarts = async (req, res) => {
  try {
    const result = await Cart.find().populate('product');
    if (!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await Cart.findById(req.params.id).populate('product');
    if (!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
