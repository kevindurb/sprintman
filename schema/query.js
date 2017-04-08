const {
  GraphQLObjectType,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ping: require('./ping'),
    user: require('./User'),
  },
});
