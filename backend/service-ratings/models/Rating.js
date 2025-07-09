const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  idStore: { type: String, required: true},
  idOrder: { type: String, required: true },
  stars: { type: Number, required: true} ,
  comment: { type: String, required: true},
});

module.exports = mongoose.model('Rating', ratingSchema);