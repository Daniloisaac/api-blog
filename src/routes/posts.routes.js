const { Router } = require('express');

const useRoute = Router();
const postsController = require('../controllers/posts.controller');
const JWTValidate = require('../middleware/JWTValidate');
const validatePosts = require('../middleware/validatePost');

useRoute.post('/', JWTValidate, validatePosts, postsController.createNewPost);

module.exports = useRoute;