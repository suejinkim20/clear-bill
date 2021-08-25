import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      bills {
        _id
        category
        company
        dueDate
        amount
        paymentStatus
        billOwner {
          email
        }
      }
    }
  }
`;

export const QUERY_MY_BILLS = gql`
  query myBills {
      myBills {
        _id
        category
        company
        dueDate
        amount
        paymentStatus
        billOwner {
          email
        }
    }
  }
`;

export const QUERY_SINGLE_BILL = gql`
  query bill($billId: ID!) {
    bill(billId: $billId) {
      _id
      category
      description
      dueDate
      amount
      paymentLink
      paymentHints
      autoPay
      paymentStatus
      billOwner
    }
    }
`;
