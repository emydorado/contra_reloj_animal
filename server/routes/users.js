const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

// Define routes and link them to controller methods
router.get('/users', usersController.getUsers);
router.get('/userTime', usersController.getUsers);
router.post('/onSelectedAnimal', usersController.createUsers);
router.post('/onConfirmation', usersController.createUsers);
router.post('/onUserData', usersController.createUsers);
router.post('/crossedFirstLine', usersController.createUsers);
router.post('/crossedSecondLine', usersController.createUsers);

module.exports = router;
