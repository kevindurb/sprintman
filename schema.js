const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String
  }

  type Goal {
    id: ID!
    name: String
    completed: Boolean
  }

  type Sprint {
    id: ID!
    name: String
    startDate: String
    goals: [Goal]
  }

  type Query {
    user(id: ID!): User
    users: [User]!
  }

  schema {
    query: Query
  }
`);
