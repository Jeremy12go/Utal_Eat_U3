const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  idStore: { type: String, required: true },
  name: { type: String, required: true },
  image: { data: Buffer, contentType: String },
  price: { type: mongoose.Schema.Types.Double, required: true },
  description: { type: String, required: true }
});

/*Método de instancia.
storeSchema.methods.getResumen = function () {
  return `${this.nombre} - ${this.categoria}`;
};

/// Método estático.
storeSchema.statics.encontrarPorCategoria = function (cat) {
  return this.find({ categoria: cat });
};
*/

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
