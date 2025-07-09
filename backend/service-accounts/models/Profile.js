const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  id: { type: String, required: true }, 
  name: { type: String, required: true},
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true} ,
  orders: [ { type: String, ref: 'Order'} ]
});

module.exports = mongoose.models.Profile || mongoose.model('Profile', profileSchema);