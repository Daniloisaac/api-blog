const userService = require('../services/user.service');

const createdNewUser = async (req, res) => {
const token = await userService.insertNewUser(req.body);
if (token.status === 400) return res.status(token.status).json({ message: token.messageError });
if (token.status === 409) return res.status(token.status).json({ message: token.messageError });

return res.status(201).json({ token });
};

module.exports = { createdNewUser };