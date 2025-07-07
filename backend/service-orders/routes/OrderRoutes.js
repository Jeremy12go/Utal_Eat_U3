const express = require('express');
const router = express.Router();
const controller = require('../controllers/OrderController');

router.get('/:idProfile', controller.getByIdProfile);
router.post('/', controller.create);
router.put('/:id', controller.update); // Cambia el estado y/o agrega productos
router.delete('/:id', controller.remove);

module.exports = router;
