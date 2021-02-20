const jsonwebtoken = require('jsonwebtoken');
const User = require('./../models/User');
const { config } = require('./../config');

async function singUp(root, { input }){
  const user = new User();
  
  const userAdded = await user.add(input);

  return userAdded;
}

async function login(root, { userName, password }){

  const user = new User();
  
  const userLoged = await user.getWithCredentials(userName, password);
  const token = jsonwebtoken.sign(
    userLoged,
    config.auth.jwtSecret,
    { expiresIn: '1d' }
  )

  return { token }
}

module.exports = {
  singUp,
  login
}