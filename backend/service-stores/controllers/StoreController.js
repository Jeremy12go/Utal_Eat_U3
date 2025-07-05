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
  const newProfile = new Profile(name, category, logo, qualification, city);
  profiles.push(newProfile);
  res.status(201).json(newProfile);
};

exports.update = (req, res) => {
  const { name } = req.params;
  const profile = profiles.find(l => l.name === name);
  if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' });

  const { phone_number, adress } = req.body;
  profile.phone_number = phone_number;
  profile.adress= adress;
  res.json(profile);
};

exports.remove = (req, res) => {
  const { name } = req.params;
  profiles = profiles.filter(l => l.name !== name);
  res.status(204).end();
};