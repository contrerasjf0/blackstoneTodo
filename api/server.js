
require('dotenv').config()

const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const cors = require('cors');

const { config } = require('./config');
const connectDB = require('./db');

const Todo = require('./models/Todo');
const { GraphQLDate } = require('graphql-iso-date');
const app = express();


const schemas = buildSchema(`
  scalar Date

  type Todo {
    _id: ID
    description: String
    done: Boolean
    userId: String
    creatAt: Date

  }

  input TodoInput {
    description: String
    done: Boolean
    userId: String
  }

  type Query {
    getTodosByUser(userId: String): [Todo]
  }

  type Mutation {
    addTodo(input: TodoInput): Todo
  }
`);

var resolvers = {
  Date: GraphQLDate,
  getTodosByUser: async ({ userId }) => {
    const todo = new Todo();

    const todos = await todo.getByUserId( userId );

    return todos;
  },
  addTodo: async ({ input }) => {
    const todo = new Todo();

    const savedTodo = await todo.add(input);

    return savedTodo;
  }
};


app.use(cors());

app.use('/api', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: config.server.isDev
}));

connectDB();

app.listen(config.server.port, () => {
  console.info(`Server is listening at http://localhost:${config.server.port}/api`);
})


