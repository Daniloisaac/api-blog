const userService = require('../services/login.service');

const fetchLogin = async (req, res) => {
const token = await userService.verifyLogin(req.body);
if (token.status === 400) return res.status(token.status).json({ message: token.messageError });
return res.status(200).json({ token });
};

module.exports = { fetchLogin };