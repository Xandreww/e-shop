const User = require('../models/user.model');
const Cart = require('../models/cart.model');
const Form = require('../models/form.model');

exports.getUsers = async (req, res) => {
  try {
    const result = await User.find().populate('cart').populate('form');
    if (!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await await User.findById(req.params.id).populate('cart').populate('form');
    if (!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.add = async (req, res) => {
  try {
    const { id } = req.body;

    const cart = await Cart.findOne({ user: id }).populate('products');
    const form = await Form.findOne({ user: id }).populate();

    const newUser = new User({ id: id, cart: cart, form: form });
    await newUser.save();
    res.json({ newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
