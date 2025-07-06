const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/Product');
const Controller = require('../controllers/ProductController');

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.get('/:id/image', Controller.getImage);
router.put('/:id', Controller.update);
router.delete('/:id', Controller.remove);

const storageProduct = multer.memoryStorage();
const uploadProduct = multer({ storageProduct });

// Crear producto con imagen.
router.post('/', uploadProduct.single('image'), async (req, res) => {
  try {
    const { id, idStore, name, price, description } = req.body;

    const product = await Product.create({
      id,
      idStore,
      name,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      },
      price,
      description
    });
    res.status(201).json({ message: 'Producto creado', product });
  } catch (e) {
    res.status(500).json({ error: 'Error al guardar el producto', detalle: e.message });
  }
});

module.exports = router;
