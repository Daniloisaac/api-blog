const { Router } = require('express');

const useRouter = Router();
const categoriesController = require('../controllers/categories.controller');
const JWTValidate = require('../middleware/JWTValidate');

useRouter.post('/', JWTValidate, categoriesController.createdNewCategorie);

module.exports = useRouter;