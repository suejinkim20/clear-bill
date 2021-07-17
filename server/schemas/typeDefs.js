const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String!
    password: String!
    bills: [Bill]
  }

  type Bill {
    _id: ID
    category: String
    description: String
    dueDate: Int
    amount: Int
    paymentLink: String
    paymentHints: String
    autoPay: Boolean
    paymentStatus: Boolean
}

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): User

  }
`;

module.exports = typeDefs;
