const postsService = require('../services/posts.service');

const createNewPost = async (req, res) => {
try {
  const { id } = req.postId.data;

  const createPost = await postsService.insertNewPostService(req.body, id);
  console.log('** RESULT createPost CONTROLLER', createPost);
  if (createPost.messageError) {
    return res.status(createPost.status).json({ message: createPost.messageError });
  }
  // console.log('RESULT DO CREATE CONTROLLER ', createPost);
  return res.status(201).json(createPost);
} catch (error) {
  console.log('** ERRO **', error);
}
};

module.exports = { createNewPost };