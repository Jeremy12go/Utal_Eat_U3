const express = require('express');
const router = express.Router();
const controller = require('../controllers/RatingController');

router.get('/:idOrder', controller.getByIdOrder);
router.get('/stores/:idStore', controller.getByIdStore);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
