const express = require('express');
const router = express.Router();
const multer = require('multer');
const Store = require('../models/Store');
const StoreController = require('../controllers/StoreController');

router.get('/:city', StoreController.getByCity);
router.get('/:id/logo', StoreController.getLogo);
router.put('/:id', StoreController.update);
router.delete('/:id', StoreController.remove);

const storageStore = multer.memoryStorage();
const uploadStore = multer({ storageStore });

// Crear tienda con logo.
router.post('/', uploadStore.single('logo'), async (req, res) => {
  try {
    const { id, name, category, city, description } = req.body;

    const store = await Store.create({
      id,
      name,
      category,
      city,
      description,
      logo: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });
    res.status(201).json({ message: 'Tienda creada', store });
  } catch (e) {
    res.status(500).json({ error: 'Error al guardar la tienda', detalle: e.message });
  }
});

module.exports = router;
