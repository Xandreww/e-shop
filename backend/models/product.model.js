const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  available: { type: Boolean, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  descriptionShort: { type: String, required: true },
  descriptionFull: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
