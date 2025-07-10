const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  idStore: { type: String, required: true },
  name: { type: String, required: true },
  image: { data: Buffer, contentType: String },
  price: { type: mongoose.Schema.Types.Double, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
