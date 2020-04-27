const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  cart: { type: String, ref: 'Cart' },
  form: { type: String, ref: 'Form' },
});

module.exports = mongoose.model('User', userSchema);
