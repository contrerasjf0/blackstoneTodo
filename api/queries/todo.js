
const Todo = require('./../models/Todo');

async function getTodosByUser (root, { userId }) {
  console.log(userId);
  const todo = new Todo();

  const todos = await todo.getByUserId( userId );
  console.log('-->',todo)
  return todos;
}

module.exports = {
  getTodosByUser
};
