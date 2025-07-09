const Order = require('../models/Order');

exports.getByIdProfile = async (req, res) => {
  try {
    const orders = await Order.find({ idProfile: req.params.idProfile } );
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
      const numOrder = await Order.countDocuments();
      const { idProfile, productList } = req.body;

      const order = await Order.create({
        id: `order${numOrder + 1}`, 
        productList, 
        idProfile,
        orderDate: new Date().toISOString(), //eliminado state: vigente y agregado fecha -nelson
      });
      res.status(201).json(order);
    } catch(e) {
      res.status(400).json({error: 'Datos inválidos', detalle: e.message });
    }
};

exports.update = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { id: req.params.id },
      { $push: { productList: req.body.product } },
      req.body,
       { new: true, runValidators: true }
    );

    if(!order)
      return res.status(404).json({ error: 'Orden no encontrada' } );

    res.json(order);
  } catch(e) {
    res.status(400).json({ error: 'Error al actualizar', detalle: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const removedOrder = await Order.findByIdAndDelete({id: req.params.id});
    if (!removedOrder)
      return res.status(404).json({ error: 'Orden no encontrada' });

    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar orden', detalle: e.message });
  }
};