const mongoose = require('mongoose');

const CATE = ['Comida Rapida', 'Cafeteria', 'Food Truck', 'Bar', 'Restaurant']

const storeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, enum: CATE },
  logo: { data: Buffer, contentType: String },
  ratings: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' } ],
  average_rating: { type: mongoose.Schema.Types.Double },
  city: { type: String, required: true },
  description: { type: String },
  productsList: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } ],
});

module.exports = mongoose.model('Store', storeSchema);