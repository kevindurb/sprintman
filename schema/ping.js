const {
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = {
  type: GraphQLString,
  args: {
    x: { type: GraphQLInt },
  },
  resolve: require('../resolvers/ping'),
};
