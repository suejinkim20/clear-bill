import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      bills {
        _id
        category: String
        description: String
        dueDate: String
        amount: Float
        paymentLink: String
        paymentHints: String
        autoPay: Boolean
        paymentStatus: Boolean
      }
    }
  }
`;

export const QUERY_BILLS = gql`
  query getBills {
    bills {
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
  }
`;

export const QUERY_SINGLE_BILL = gql`
  query getSingleBill($billId: ID!) {
    bill(billId: $billId) {
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
    }
  }
`;
