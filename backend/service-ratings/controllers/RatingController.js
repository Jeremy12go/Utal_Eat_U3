const Rating = require('../models/Rating');

let ratings = [] // Base temporal.

exports.getAll = (req, res) => {
    res.json(ratings);
};

exports.getByIdOrder = (req, res) => {
  const rating = ratings.find(l => l.idOrder === req.params.idOrder);
  if (!rating) return res.status(404).json({ error: 'Rating no encontrado' });
  res.json(rating);
};

exports.create = (req, res) => {
  const { idStore, idOrder, numStars, comment } = req.body;
  const newRating = new Rating(idStore, idOrder, numStars, comment);
  ratings.push(newRating);
  res.status(201).json(newRating);
};

exports.update = (req, res) => {
  const { idOrder } = req.params;
  const rating = ratings.find(l => l.idOrder === idOrder);
  if (!rating) return res.status(404).json({ error: 'Rating no encontrado' });

  const { idStore, numStars, comment} = req.body;
  rating.idStore = idStore;
  rating.numStars = numStars;
  rating.comment = comment;
  res.json(rating);
};

exports.remove = (req, res) => {
  const { idOrder } = req.params;
  ratings = ratings.filter(l => l.idOrder !== idOrder);
  res.status(204).end();
};