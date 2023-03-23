const postsService = require('../services/posts.service');

const createNewPost = async (req, res) => {
  const { id } = req.postId.data;

  const createPost = await postsService.insertNewPostService(req.body, id);
  if (createPost.messageError) {
    return res.status(createPost.status).json({ message: createPost.messageError });
  }
  return res.status(201).json(createPost);
};

module.exports = { createNewPost };