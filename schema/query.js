const {
  GraphQLObjectType,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ping: require('./ping'),
    user: require('./User'),
  },
});
