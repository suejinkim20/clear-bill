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
    dueDate: String
    amount: Float
    paymentLink: String
    paymentHints: String
    autoPay: Boolean
    paymentStatus: Boolean
}

type Auth {
  token: ID!
  user: User
}

  type Query {
    users: [User]
    user(email: String): User
    bills: [Bill]
    bill(billId: ID): Bill
  }

  type Mutation {
    addBill(category: String, description: String, dueDate: String, amount: Float, paymentLink: String, paymentHints: String, autoPay: Boolean, paymentStatus: Boolean): Bill
    removeBill(billId: ID!): Bill
    billsByCategory(category: String, amount: Float): [Bill]
    markBillPaid(billId: ID): Bill
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
