const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true},
  phoneNumber: { type: String, required: true },
  adress: { type: String, required: true} ,
  orders: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true}
});

module.exports = mongoose.model('Profile', profileSchema);