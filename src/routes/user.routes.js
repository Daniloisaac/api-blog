const { Router } = require('express');

const userRoutes = Router();
const userController = require('../controllers/user.controller');

userRoutes.post('/', userController.createdNewUser);

module.exports = userRoutes;