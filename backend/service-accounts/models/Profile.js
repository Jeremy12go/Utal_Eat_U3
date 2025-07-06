const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true},
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true} ,
  orders: { type: mongoose.Schema.Types.ObjectId, ref: 'Order'}
});

module.exports = mongoose.models.Profile || mongoose.model('Profile', profileSchema);