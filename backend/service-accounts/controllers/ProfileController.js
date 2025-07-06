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