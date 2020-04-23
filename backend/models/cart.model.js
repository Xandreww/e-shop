const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Cart', cartSchema);
