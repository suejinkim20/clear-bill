import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($profileId: ID) {
    user(profileId: $profileId) {
      _id
      email
      bills {
        _id
        category
        description
        dueDate
        amount
        paymentLink
        paymentHints
        autoPay
        paymentStatus
      }
    }
  }
`;

export const QUERY_BILLS = gql`
  query bills {
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
  query bill($billId: ID!) {
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
`;
