require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send({ message: 'Token not found' });
    const validJwt = jwt.verify(token, process.env.JWT_SECRET || '1345');
    req.postId = validJwt;
  } catch (error) {
   return res.status(401).send({ message: 'Expired or invalid token' });
  }

  next();
};