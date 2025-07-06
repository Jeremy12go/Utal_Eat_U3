const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  idStore: { type: String, required: true},
  idOrder: { type: String, required: true },
  numStars: { type: mongoose.SchemaTypes.Double, required: true} ,
  comment: { type: String, required: true}
});

module.exports = mongoose.model('Rating', ratingSchema);