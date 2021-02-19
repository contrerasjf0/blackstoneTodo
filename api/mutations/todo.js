const Todo = require('./../models/Todo');

async function addTodo(root, { input }) {
  const todo = new Todo();

  const savedTodo = await todo.add(input);

  return savedTodo;
}

async function updateTodo(root, { _id, input }) {
  const todo = new Todo();

  const todoUpdated = await todo.update(_id, input);

  return todoUpdated;
}

module.exports = {
  addTodo,
  updateTodo
};
