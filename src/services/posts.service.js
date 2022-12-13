const postsModels = require('../models');

const insertNewPostService = async (newPost) => {
const createNewPost = await postsModels.PostCategory.create({
  title: newPost.title,
  content: newPost.content,
  categoryIds: newPost.categoryIds,
});
return createNewPost;
};
 
module.exports = { insertNewPostService };