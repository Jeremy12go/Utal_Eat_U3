const Order = require('../models/Order');


exports.getByIdProfile = async (req, res) => {
  try {
    const orders = await Order.find({
      idProfile: { $regex: new RegExp(req.params.idProfile, 'i') }
    });
    if (orders.length === 0) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    res.json(orders);
  } catch(e) {
    res.status(500).json({ error: 'Error al obtener Ordenes', detalle: e.message });
  }
};

exports.create = async (req, res) => {
   try {
      const numProfiles = await Order.countDocuments();
      const order = await Order.create({
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

exports.update = (req, res) => {
  const { id } = req.params;
  const order = orders.find(l => l.id === id);
  if (!order) return res.status(404).json({ error: 'Orden no encontrada' });

  const { listProducts, idAccount } = req.body;
  order.listProducts = listProducts;
  order.idAccount = idAccount;
  res.json(order);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  order = orders.filter(l => l.id !== id);
  res.status(204).end();
};