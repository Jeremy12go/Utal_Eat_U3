const Rating = require('../models/Rating');

exports.getAll = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch(e) {
    res.status(500).json({error: 'Error al obtener Ratings', detalle: e.message });
  }
};

exports.getByIdOrder = async (req, res) => {
  try {
    const rating = await Rating.findOne({ idOrder: req.params.idOrder });
    if (!rating) {
      return res.status(404).json({ error: `Rating de orden ${req.params.idOrder} no encontrado` });
    }
    res.json(rating);
  } catch(e) {
    res.status(500).json({error: 'Error al obtener Ratings', detalle: e.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRating = await Rating.create(req.body);
    res.status(201).json(newRating);
  } catch(e) {
    res.status(400).json({error: 'Datos inválidos', detalle: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedRating = await Rating.findOneAndUpdate(
      { idOrder: req.params.idOrder },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRating) {
      return res.status(404).json({ error: `Rating de orden ${req.params.idOrder} no encontrado` });
    }
    res.json(updatedRating);
  } catch (e) {
    res.status(400).json({ error: 'Error al actualizar rating', detalle: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletedRating = await Rating.findOneAndDelete({ idOrder: req.params.idOrder });
    if (!deletedRating) {
      return res.status(404).json({ error: `Rating de orden ${req.params.idOrder} no encontrado` });
    }
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar rating', detalle: e.message });
  }
};