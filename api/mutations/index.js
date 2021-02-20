const todoMutations = require('./todo');
const userMutation = require('./user');

module.exports = {
  ...todoMutations,
  ...userMutation
};
