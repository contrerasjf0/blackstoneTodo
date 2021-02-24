const Todo = require('./../models/Todo');
const { ErrorHandler, ErrorTypes } = require('./../graphql/ErrorHandler');

async function addTodo(root, { input }, { user }) {
  
  if(!user){
    throw new ErrorHandler(ErrorTypes.UserNotAuth);
  }

  const todo = new Todo();
  input.userId = user._id;
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

async function deleteTodo(root, { _id }, { user }){
  if(!user){
    throw new ErrorHandler(ErrorTypes.UserNotAuth);
  }

  const todo = new Todo();
  
  const todoRemovedInfo = await todo.remove(_id);

  return todoRemovedInfo;

}
module.exports = {
  addTodo,
  updateTodo,
  deleteTodo
};
