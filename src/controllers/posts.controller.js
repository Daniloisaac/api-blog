const postsService = require('../services/posts.service');

const createNewPost = async (req, res) => {
const createPost = await postsService.insertNewPostService(req.body);
return res.status(201).send(createPost);
};

module.exports = { createNewPost };