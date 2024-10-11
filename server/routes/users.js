const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

// Define routes and link them to controller methods
router.get('/users', usersController.users);
router.get('/userTime', usersController.userTime);
router.post('/onSelectedAnimal', usersController.onSelectedAnimal);
router.post('/onConfirmation', usersController.onConfirmation);
router.post('/onUserData', usersController.onUserData);
router.post('/crossedFirstLine', usersController.crossedFirstLine);
router.post('/crossedSecondLine', usersController.crossedSecondLine);

module.exports = router;
