const postsModels = require('../models');
const { getByIdService } = require('./categories.service');

const insertNewPostService = async (newPost, id) => {
  // console.log('RESULTADO ID', id);
const validateCategoryId = await Promise
.all(newPost.categoryIds.map((categoryId) => getByIdService(categoryId)));
  if (validateCategoryId.includes(undefined)) {
    return { status: 400, messageError: 'one or more "categoryIds" not found' };
  }
const createNewPost = await postsModels.BlogPost.create({
  title: newPost.title,
  content: newPost.content,
  userId: id,
  published: new Date(),
  updated: new Date(),
});
// console.log('** RESULT NEW POST **', newPost);
// console.log('** RESULT NEW POST **', createNewPost.id);
await Promise.all(newPost.categoryIds.map((category) => 
postsModels.PostCategory.create({ postId: createNewPost.id, categoryId: category }))); 
// console.log('** RESULT MAP **', await a);

return createNewPost;
};
 
module.exports = { insertNewPostService };