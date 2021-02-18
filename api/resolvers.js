const { GraphQLDate } = require('graphql-iso-date');
const queries  = require('./queries');
const mutations = require('./mutations')

module.exports = {
  Date: GraphQLDate,
  Query: queries,
  Mutation: mutations
};
