const Profile = require('../models/Profile');

let profiles = [] // Base temporal.

exports.getAll = (req, res) => {
    res.json(profiles);
};

exports.getByName = (req, res) => {
  const profile = profiles.find(l => l.name === req.params.name);
  if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' });
  res.json(profile);
};

exports.create = (req, res) => {
  const { name, phone_number, adress } = req.body;
  const newProfile = new Profile(name, phone_number, adress);
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