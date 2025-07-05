const Order = require('../models/Order');

let orders = [] // Base temporal.

exports.getAll = (req, res) => {
    res.json(orders);
};

exports.getById = (req, res) => {
  const order = orders.find(l => l.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Orden no encontrada' });
  res.json(order);
};

exports.create = (req, res) => {
  const { id, listProducts, idAccount } = req.body;
  const newOrder = new Order(id, listProducts, idAccount);
  orders.push(newOrder);
  res.status(201).json(newOrder);
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