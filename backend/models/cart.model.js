const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  product: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'Product' },
});

module.exports = mongoose.model('Cart', cartSchema);
