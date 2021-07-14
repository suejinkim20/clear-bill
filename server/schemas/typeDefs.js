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
    dueDate: Number
    amount: Number
    paymentLink: String
    paymentHints: String
    autoPay: Boolean
    paymentStatus: Boolean
}

  type Query {
    bills: [Bill]!
    bill(billId: ID!): Bill
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
