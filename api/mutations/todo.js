const Todo = require('./../models/Todo');

async function addTodo(root, { input }) {
  const todo = new Todo();

  const savedTodo = await todo.add(input);

  return savedTodo;
}

module.exports = {
  addTodo
};
