require('dotenv').config();
const jwt = require('jsonwebtoken');

const userModel = require('../models');
 
const emailFormat = /^\w+([\\.-]?\w+)@\w+([\\.-]?\w+)(\.\w{2,3})+$/;

const validateEmail = async (newUser) => {
  if (!emailFormat.test(newUser.email)) {
    return { status: 400, messageError: '"email" must be a valid email' };
  }
  const emailUser = await userModel.User.findOne({ where: { email: newUser.email } });
  if (!emailUser) return { status: null };
  if (emailUser.dataValues.email === newUser.email) {
  return { status: 409, messageError: 'User already registered' };
  }
};

const insertNewUser = async (newUser) => {
  const emailUser = await validateEmail(newUser);
  if (newUser.displayName.length < 8) {
    return { status: 400, messageError: '"displayName" length must be at least 8 characters long' };
  }
  if (newUser.password.length < 6) {
    return { status: 400, messageError: '"password" length must be at least 6 characters long' };
  }
  if (emailUser.status) return emailUser;
const createNewUser = await userModel.User.create({ displayName: newUser.displayName,
    email: newUser.email,
    password: newUser.password,
    image: newUser.image, 
  });
const { password, ...userData } = createNewUser.dataValues;
  const token = jwt.sign({ data: userData },
     process.env.JWT_SECRET || '12345', { algorithm: 'HS256' }, { expiresIn: '1min' });
  return token;
};

const findAllUsersService = async () => {
const getAll = await userModel.User.findAll();
const passwordRemoverTheOfUsers = getAll.map(({ dataValues }) => ({
  id: dataValues.id,
  displayName: dataValues.displayName,
  email: dataValues.email,
  image: dataValues.image,
}));
// console.log('**RETURNO DO FIND ALL SERVICE**');
  return passwordRemoverTheOfUsers;
};

const findUserByIdService = async (id) => {
  const getAll = await userModel.User.findAll();
  const [getUserById] = await userModel.User.findAll({ where: { id } });
  if (getAll.length < id) return { status: 404, messageError: 'User does not exist' };
  const { password, ...userData } = getUserById.dataValues;
  // console.log('**RETURNO DO FIND ALL SERVICE**', getUserById);
    return userData;
  };

module.exports = {
   insertNewUser,
   findAllUsersService, 
   findUserByIdService,
   };
