const mongoose = require('mongoose');

const QUALI = ['Comida Rapida', 'Cafeteria', 'Food Truck', 'Bar', 'Restaurant']

const storeSchema = new mongoose.Schema({
  id: { type: String, required: true},
  name: { type: String, required: true },
  category: {type: String, required: true} ,
  qualification: {
    type: String,
    enum: QUALI,
    required: true}
});

/// Método de instancia.
storeSchema.methods.getResumen = function () {
  return `${this.nombre} - ${this.categoria}`;
};

/// Método estático.
storeSchema.statics.encontrarPorCategoria = function (cat) {
  return this.find({ categoria: cat });
};

module.exports = mongoose.model('Store', storeSchema);
