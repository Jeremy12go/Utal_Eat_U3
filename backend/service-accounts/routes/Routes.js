const express = require('express');
const router = express.Router();
const controllerAccount = require('../controllers/AccountController');
const controllerProfile = require('../controllers/ProfileController');

router.post('/login', controllerAccount.login);
router.post('/', controllerAccount.create);
router.delete('/:email', controllerAccount.remove);

router.get('/:id', controllerProfile.getById);
router.put('/:id', controllerProfile.update);

module.exports = router;