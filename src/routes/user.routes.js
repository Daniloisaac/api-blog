const { Router } = require('express');

const userRoutes = Router();
const userController = require('../controllers/user.controller');
const JWTValidate = require('../middleware/JWTValidate');

userRoutes.get('/', JWTValidate);
userRoutes.post('/', userController.createdNewUser);

module.exports = userRoutes;