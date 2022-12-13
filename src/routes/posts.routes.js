const { Router } = require('express');

const useRoute = Router();
const postsController = require('../controllers/posts.controller');
const JWTValidate = require('../middleware/JWTValidate');

useRoute.post('/', JWTValidate, postsController.createNewPost);

module.exports = useRoute;