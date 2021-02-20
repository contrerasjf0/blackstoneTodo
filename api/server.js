
require('dotenv').config()

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const jwt = require('express-jwt');
const cors = require('cors');
const { readFileSync } = require('fs');
const { join } = require('path');

const connectDB = require('./db');

const { config } = require('./config');
const resolvers = require('./resolvers')
const { customFormatErrorHandler } = require('./graphql/ErrorHandler');

const authMiddleware = jwt({
  secret: config.auth.jwtSecret,
  credentialsRequired: false,
  algorithms: ['HS256']
});

const app = express();

const typeDefs = readFileSync(
  join(__dirname, 'graphql', 'schema.graphql'),
  'utf-8'
);

const schemas = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors());
app.use(authMiddleware);

app.use('/api', graphqlHTTP((req) => ({
  schema: schemas,
  rootValue: resolvers,
  graphiql: config.server.isDev,
  customFormatErrorFn: customFormatErrorHandler,
  context: {
    user: req.user
  }
})));

connectDB();

app.listen(config.server.port, () => {
  console.info(`Server is listening at http://localhost:${config.server.port}/api`);
})


