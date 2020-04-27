const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }],
  user: { type: String, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
