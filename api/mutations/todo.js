const Todo = require('./../models/Todo');
const { ErrorHandler, ErrorTypes } = require('./../graphql/ErrorHandler');

async function addTodo(root, { input }, { user }) {
  
  if(!user){
    throw new ErrorHandler(ErrorTypes.UserNotAuth);
  }

  const todo = new Todo();

  const savedTodo = await todo.add(input);

  return savedTodo;
}

async function updateTodo(root, { _id, input }, { user }) {
  
  if(!user){
    throw new ErrorHandler(ErrorTypes.UserNotAuth);
  }

  const todo = new Todo();

  const todoUpdated = await todo.update(_id, input);

  return todoUpdated;
}

module.exports = {
  addTodo,
  updateTodo
};
