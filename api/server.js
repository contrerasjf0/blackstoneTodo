
require('dotenv').config()

const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const cors = require('cors');

const { config } = require('./config');

const app = express();


const schemas = buildSchema(`
  type Query {
    getTodos: String
  }
`);

var resolvers = {
  getTodos: () => {
    return 'Todo';
  },
};


app.use(cors());

app.use('/api', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: config.server.isDev
}));

app.listen(config.server.port, () => {
  console.log(`Server is listening at http://localhost:${config.server.port}/api`);
})


