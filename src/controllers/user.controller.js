const userService = require('../services/user.service');

const createdNewUser = async (req, res) => {
const token = await userService.insertNewUser(req.body);
if (token.status === 400) return res.status(token.status).json({ message: token.messageError });
if (token.status === 409) return res.status(token.status).json({ message: token.messageError });

return res.status(201).json({ token });
};

const getAllUsersController = async (_req, res) => {
const allUsers = await userService.findAllUsersService();
res.status(200).send(allUsers);
};

const getUsersByIdController = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findUserByIdService(id);
  if (user.messageError) return res.status(user.status).send({ message: user.messageError });
  res.status(200).send(user);
  };

module.exports = { 
  createdNewUser,
  getAllUsersController,
  getUsersByIdController,
 };