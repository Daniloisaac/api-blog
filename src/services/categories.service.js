const categoriesModel = require('../models');

const insertNewCategorie = async (newCategory) => {
console.log('** RESULTADO DO newCategory CATEGORIE **', newCategory);
  if (!newCategory) {
console.log('** RWE FSDFSDFSD DIM **');

    return { status: 400, messageError: '"name" is required' };
  }
console.log('** RWE FSDFSDFSD DINGGM **');

const createdNewCategorie = await categoriesModel.Category.create({
name: newCategory,
});
console.log('** RESULTADO DO INSERT CATEGORIE **', createdNewCategorie);
return createdNewCategorie;
};

module.exports = { insertNewCategorie };