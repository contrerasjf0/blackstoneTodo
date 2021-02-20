const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { config } = require('./../config');

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;
const { ErrorHandler, ErrorTypes } = require('./../graphql/ErrorHandler');

const UserSchema = new Schema({
  fullName: String,
  email: String,
  userName: String,
  password: String,
  token: String
});


class User {
  
  constructor(){
    this.model = mongoose.model('user', UserSchema);
  }

  async add(user){
    let document;
    let existUser;

    try {

      existUser = await this.model.findOne({ $or: [{email: user.email}, {userName: user.userName}]});

      if(!existUser){
        user.password = await bcrypt.hash(user.password, parseInt(config.auth.salt));
        document = await this.model.create(user);
      }
      
    } catch (err) {
      console.log('Error adding the user');
    }

    if(existUser){
      throw new ErrorHandler(ErrorTypes.UserExist);
    }

    return document;
  }

  async getWithCredentials(userName, password){
    let document;
    let validUser;

    
    document = await this.model.findOne({ userName });
    
    if(!document){
      throw new ErrorHandler(ErrorTypes.UserNotFoundAuth);
    }

    validUser = await bcrypt.compare(password, document.password);

    if(!validUser){
      throw new ErrorHandler(ErrorTypes.UserNotFoundAuth);
    }

    const userJson = document.toJSON();

    delete userJson.password;
    delete userJson.token;
    
    return userJson;
    
  }

  update(id, data){

  }
}

module.exports = User;
