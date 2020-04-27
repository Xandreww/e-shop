const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  delivery: { type: String, required: true },
  payment: { type: String, required: true },
  comment: { type: String },
  user: { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);
