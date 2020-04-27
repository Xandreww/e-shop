const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  try {
    const result = await User.find();
    if (!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getId = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    if (!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.add = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const newUser = new User({ id: id });
    await newUser.save();
    res.json({ id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
