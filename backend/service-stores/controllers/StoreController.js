const Profile = require('../models/Store');

let stores = [] // Base temporal.

exports.getAll = (req, res) => {
    res.json(stores);
};

exports.getByName = (req, res) => {
  const store = stores.find(l => l.name === req.params.name);
  if (!store) return res.status(404).json({ error: 'Tienda no encontrada' });
  res.json(store);
};

exports.create = (req, res) => {
  const { name, category, logo, qualification, city } = req.body;
  const newStore = new Profile(name, category, logo, qualification, city);
  profiles.push(newStore);
  res.status(201).json(newStore);
};

exports.update = (req, res) => {
  const { name } = req.params;
  const store = stores.find(l => l.name === name);
  if (!store) return res.status(404).json({ error: 'Tienda no encontrada' });

  const { category, logo, qualification, city } = req.body;
  store.category = category;
  store.logo = logo;
  store.qualification = qualification;
  store.city = city;
  res.json(store);
};

exports.remove = (req, res) => {
  const { name } = req.params;
  stores = stores.filter(l => l.name !== name);
  res.status(204).end();
};