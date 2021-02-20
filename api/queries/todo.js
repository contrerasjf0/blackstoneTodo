
const Todo = require('./../models/Todo');
const { ErrorHandler, ErrorTypes } = require('./../graphql/ErrorHandler');

async function getTodos (root, _ , { user }) {

  if(!user){
    throw new ErrorHandler(ErrorTypes.UserNotAuth);
  }
  
  const todo = new Todo();

  const todos = await todo.getByUserId( user._id );

  return todos;
}

module.exports = {
  getTodos
};
