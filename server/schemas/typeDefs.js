const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  email: String
  password: String
  bills: [Bill]
}

type Bill {
  _id: ID
  category: String
  company: String
  dueDate: String
  amount: Float
  paymentStatus: Boolean
  billOwner: User
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    myBills: [Bill]
    bill(billId: ID): Bill
  }

  type Mutation {
    addTestBill(
      category: String, 
      company: String, 
      dueDate: String, 
      amount: Float, 
      paymentStatus: Boolean, 
      billOwner: ID
    ): Bill
    updateTestBill(
        _id: ID!
        category: String, 
        company: String, 
        dueDate: String, 
        amount: Float, 
        paymentStatus: Boolean, 
        billOwner: ID
      ): Bill
    addBill(
        category: String, 
        company: String, 
        dueDate: String, 
        amount: Float, 
        paymentStatus: Boolean, 
        billOwner: ID
      ): Bill
    updateBill(
      _id: ID!
      category: String, 
      company: String, 
      dueDate: String, 
      amount: Float, 
      paymentStatus: Boolean, 
    ): Bill
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
