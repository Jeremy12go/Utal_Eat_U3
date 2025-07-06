const express = require('express');
const router = express.Router();
const controllerAccount = require('../controllers/AccountController');
const controllerProfile = require('../controllers/ProfileController');

router.get('/:email/profile', controllerAccount.getProfileByEmail);
router.post('/', controllerAccount.create);
router.delete('/:id', controllerAccount.remove);

router.get('/:name', controllerProfile.getByName);
router.put('/:name', controllerProfile.update);

module.exports = router;