const categoriesModel = require('../models');

const insertNewCategorie = async (newCategory) => {
console.log('** RESULTADO DO newCategory CATEGORIE **', newCategory);
  if (!newCategory) {
    return { status: 400, messageError: '"name" is required' };
  }
const createdNewCategorie = await categoriesModel.Category.create({
name: newCategory,
});
return createdNewCategorie;
};

const getAllService = async () => {
const getAll = await categoriesModel.Category.findAll();
console.log('** RESULTADO DO getAll CATEGORIE **', getAll);
return getAll; 
};

module.exports = { 
  insertNewCategorie,
  getAllService,  
 };