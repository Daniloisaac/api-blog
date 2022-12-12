require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    // console.log('** TOKEN AUTHO CONTROLLER **', token);
    if (!token) return res.status(401).send({ message: 'Token not found' });
    const validJwt = jwt.verify(token, process.env.JWT_SECRET || '1345');
    console.log('** validJwt AUTHO CONTROLLER **', validJwt);
  } catch (error) {
    console.log(`** catch erro ${error} ** `);
   return res.status(401).send({ message: 'Expired or invalid token' });
  }

  next();
};