const Account = require('../models/Account');


exports.getByEmail = async (req, res) => {
  try {
    const account = await Account.findOne({ email: req.params.email });
    if (!account) {
      return res.status(404).json({ error: `Cuenta de correo ${req.params.idOrder} no encontrada` });
    }
    res.json(account);
  } catch(e) {
    res.status(500).json({error: 'Error al obtener cuenta', detalle: e.message });
  }
};

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
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch(e) {
    res.status(400).json({error: 'Datos inválidos', detalle: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedAccount = await Account.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAccount) {
      return res.status(404).json({ error: `Cuenta de correo ${req.params.email} no encontrada` });
    }
    res.json(updatedAccount);
  } catch (e) {
    res.status(400).json({ error: 'Error al actualizar cuenta', detalle: e.message });
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