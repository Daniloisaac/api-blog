const { Router } = require('express');

const userRoute = Router();
const user = require('../controllers/login.controller');

userRoute.post('/', user.fetchLogin);

module.exports = userRoute;
