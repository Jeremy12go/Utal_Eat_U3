const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  idStore: { type: String, required: true},
  idOrder: { type: String, required: true },
  idProfile: { type: String, required: true },
  stars: { type: Number, required: true, min:0, max:5 } ,
  comment: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Rating', ratingSchema);
