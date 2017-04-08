const {
  GraphQLID,
} = require('graphql');

module.exports = {
  type: require('../types/User'),
  args: {
    id: { type: GraphQLID },
  },
  resolve: require('../resolvers/user'),
};
