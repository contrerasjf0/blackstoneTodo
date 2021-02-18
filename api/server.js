
require('dotenv').config()

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const { readFileSync } = require('fs');
const { join } = require('path');

const { config } = require('./config');
const connectDB = require('./db');


const app = express();

const resolvers = require('./resolvers')

const typeDefs = readFileSync(
  join(__dirname, 'graphql', 'schema.graphql'),
  'utf-8'
);

const schemas = makeExecutableSchema({ typeDefs, resolvers })

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


