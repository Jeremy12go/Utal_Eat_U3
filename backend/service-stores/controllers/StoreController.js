const Store = require('../models/Store');

exports.getByCity = async (req, res) => {
  try {
    const city = req.params.city.toLowerCase();

    const stores = await Store.find({
      city: city
    });
    if (stores.length === 0) {
      return res.status(404).json({ error: 'Tienda no encontrada' });
    }
    res.json(stores);
  } catch(e){
    res.status(500).json({error: 'Error al obtener tienda', detalle: e.message });
  }
};

exports.getLogo = async (req, res) => {
  try {
    const store = await Store.findOne({ id: req.params.id });

    if (!store || !store.logo) {
      return res.status(404).send('Logo no encontrado');
    }

    res.contentType(store.logo.contentType);
    res.send(store.logo.data);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener logo', detalle: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const store = await Store.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if(!store)
      return res.status(404).json({error: 'Tienda no encontrada', detalle: e.message } );

    res.json(store);
  } catch(e) {
    res.status(400).json({ error: 'Error al actualizar', detalle: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const removedStore = await Store.findByIdAndDelete({id: req.params.id});
    if (!removedStore)
      return res.status(404).json({ error: 'Tienda no encontrada' });

    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar la tienda', detalle: e.message });
  }
};