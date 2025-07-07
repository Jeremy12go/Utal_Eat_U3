const mongoose = require('mongoose');

const STATE = ['Finalizada', 'Vigente']

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  state: { type: String, emun: STATE },
  productList: [ { type: String } ],
  idProfile: { type: String, required: true} 
});

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);