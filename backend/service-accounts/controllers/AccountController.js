const Account = require('../models/Account');
const Profile = require('../models/Profile');

exports.getProfileByEmail = async (req, res) => {
  try {
    const account = await Account.findOne({ email: req.params.email }).populate('profile');
    if (!account || !account.profile) {
      return res.status(404).json({ error: 'Perfil no encontrado para ese correo' });
    }

    res.json(account.profile);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener perfil', detalle: e.message });
  }
};

exports.create = async (req, res) => {
  try {
    const numProfiles = await Profile.countDocuments();
    const profile = await Profile.create({
      name: `user${numProfiles + 1}`,  
      phoneNumber: 111111111,
      address: 'NO INGRESADA'
    });
    const { email, password } = req.body;
    const account = await Account.create({
      email: email,
      password: password,
      profile: profile._id
    });
    res.status(201).json(account);
  } catch(e) {
    res.status(400).json({error: 'Datos inválidos', detalle: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletedAccount = await Account.findOneAndDelete({ email: req.params.email });
    if (!deletedAccount) {
       return res.status(404).json({ error: `Cuenta de correo ${req.params.email} no encontrada` });
    }
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar cuenta', detalle: e.message });
  }
};