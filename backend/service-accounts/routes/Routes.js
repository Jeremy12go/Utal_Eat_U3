const express = require('express');
const router = express.Router();
const controllerAccount = require('../controllers/AccountController');
const controllerProfile = require('../controllers/ProfileController');

router.get('/:email/profile', controllerAccount.getProfileByEmail);
router.post('/', controllerAccount.create);
router.delete('/:email', controllerAccount.remove);

router.get('/:_id', controllerProfile.getById);
router.put('/:_id', controllerProfile.update);

module.exports = router;