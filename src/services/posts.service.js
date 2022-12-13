const postsModels = require('../models');

const insertNewPost = async (newPost) => {
const createNewPost = await postsModels.PostCategory.create({
  title: newPost,
  content: newPost,
  categoryIds: newPost,
});
return createNewPost;
};
 
module.exports = { insertNewPost };