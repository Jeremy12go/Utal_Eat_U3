const mongoose = require('mongoose');

const QUALI = ['Comida Rapida', 'Cafeteria', 'Food Truck', 'Bar', 'Restaurant']

const storeSchema = new mongoose.Schema({
  id: { type: String, required: true},
  name: { type: String, required: true },
  category: {type: String, required: true} ,
  qualification: {
    type: String,
    enum: QUALI,
    required: true},
});

module.exports = mongoose.model('Store', storeSchema);
