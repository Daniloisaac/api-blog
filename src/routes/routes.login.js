const { Router } = require('express');

const user = require('../controllers/login.controller');

const userRoute = Router();

userRoute.post('/', user.fetchLogin);

module.exports = userRoute;
