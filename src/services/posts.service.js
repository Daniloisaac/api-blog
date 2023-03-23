const postsModels = require('../models');
const { getByIdService } = require('./categories.service');

const insertNewPostService = async (newPost, id) => {
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
await Promise.all(newPost.categoryIds.map((category) => 
postsModels.PostCategory.create({ postId: createNewPost.id, categoryId: category }))); 

return createNewPost;
};
 
module.exports = { insertNewPostService };