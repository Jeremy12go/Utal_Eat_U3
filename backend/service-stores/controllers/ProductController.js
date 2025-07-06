const Product = require('../models/Product');


exports.getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch(e){
         res.status(500).json({error: 'Error al obtener productos', detalle: e.message });
    }
}

exports.getById = async (req, res) => {
  try {
    const product = await Product.find(req.params);
    if (!product) 
      return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch(e){
    res.status(500).json({error: 'Error al obtener producto', detalle: e.message });
  }
};

exports.getImage = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    if (!product || !product.image) {
      return res.status(404).send('Imagen no encontrado');
    }

    res.contentType(product.image.contentType);
    res.send(product.image.data);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener imagen', detalle: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if(!product)
      return res.status(404).json({error: 'Producto no encontrado', detalle: e.message } );

    res.json(product);
  } catch(e) {
    res.status(400).json({ error: 'Error al actualizar', detalle: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const removedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!removedProduct)
      return res.status(404).json({ error: 'Producto no encontrado' });

    res.status(204).end();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar producto', detalle: e.message });
  }
};