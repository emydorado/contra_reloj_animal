const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

// Define routes and link them to controller methods
router.post('/crossedFirstLine', usersController.crossedFirstLine);
router.post('/crossedSecondLine', usersController.crossedSecondLine);
router.post('/winner', usersController.winner);
router.post('/users', usersController.users);

module.exports = router;
