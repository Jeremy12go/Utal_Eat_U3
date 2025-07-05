const Store = require('../models/Store');
const ImagesRedis = require('../services/ImagesRedis');

exports.getAll = async (req, res) => {
    try {
      const stores = await Store.find();
      res.json(stores);
    } catch(e) {
      res.status(500).json({error: 'Error al obtener tiendas', detalle: e.message });
    }
};

exports.getById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store) 
      return res.status(404).json({ error: 'Tienda no encontrada' });
    res.json(store);
  } catch(e){
    res.status(500).json({error: 'Error al obtener tienda', detalle: e.message });
  }
};

exports.getLogo = async (req, res) => {
  try {
    const logo = await ImagesRedis.getImage(req.params.id);
    if (!logo) return res.status(404).send('Logo no encontrado');
    res.send(logo); // O res.type('image/png').send(Buffer...) para binario
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener logo', detalle: e.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { nombre, direccion, categoria, logo } = req.body;
    const newStore = await Store.create({ nombre, direccion, categoria });

    if (logo) {
      await ImagesRedis.saveImage(newStore._id.toString(), logo);
    }

    res.status(201).json(newStore);
  } catch (e) {
    res.status(400).json({ error: 'Datos inválidos', detalle: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if(!store)
      return res.status(404).json({error: 'Tienda no encontrado', detalle: e.message } );

    res.json(store);
  } catch(e) {
    res.status(400).json({ error: 'Error al actualizar', detalle: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const removedStore = await Store.findByIdAndDelete(req.params.id);
    if (!removedStore)
      return res.status(404).json({ error: 'Tienda no encontrada' });

    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar la tienda', detalle: e.message });
  }
};