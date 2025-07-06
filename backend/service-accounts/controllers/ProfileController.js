const Profile = require('../models/Profile');

exports.getByName = async (req, res) => {
  try {
    const profile = await Profile.findOne({ name: req.params.name });
    if(!profile)
      return res.status(404).json({ error: 'Perfil no encontrado' })
    res.json(profile);
  } catch(e) {
    res.status(500).json({error: 'Error al obtener perfil', detalle: e.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch(e) {
    res.status(400).json({error: 'Datos inválidos', detalle: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProfile) 
      return res.status(404).json({ error: `Perfil ${req.params.name} no encontrado` });
    
    res.json(updatedProfile);
  } catch (e) {
    res.status(400).json({ error: 'Error al actualizar profile', detalle: e.message });
  }
};

exports.remove = (req, res) => {
  const { name } = req.params;
  profiles = profiles.filter(l => l.name !== name);
  res.status(204).end();
};