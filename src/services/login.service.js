const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');

const verifyLogin = async (userData) => {
  if (!userData.email.trim() || !userData.password.trim()) { 
  return { status: 400, messageError: 'Some required fields are missing' };
}

const user = await User.findOne({ where: { email: userData.email, password: userData.password } });
console.log('***USER DO SERVICE--', user);
if (!user) {
  return { status: 400, messageError: 'Invalid fields' };
}
const { password, ...userLogin } = user.dataValues;
const token = jwt
.sign(
 { data: userLogin },  
 process.env.JWT_SECRET || '1345', { algorithm: 'HS256' }, { expiresIn: '15min' },
  );
return token;
};

module.exports = { verifyLogin }; 