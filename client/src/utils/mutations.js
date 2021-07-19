import { gql } from '@apollo/client'

export const ADD_BILL = gql`
mutation addBill($category: String!, $description: String!, $dueDate: String!, $amount: Float!, $paymentLink: String!, $paymentHints: String!, $autoPay: Boolean!, $paymentStatus: Boolean!) {
    addBill(category: $category, description: $description, dueDate: $dueDate, amount: $amount, paymentLink: $paymentLink, paymentHints: $paymentHints, autoPay: $autoPay, paymentStatus: $paymentStatus) {
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
`;

export const REMOVE_BILL = gql`
mutation removeBill($billId: Int!) {
    removeBill(billId: $billId) {
    _id
    billId
    }
}
`;


export const BILLS_BY_CATEGORY = gql`
mutation billsByCategory($category: String!, $amount: Float!) {
    billsByCategory(category: $category, amount: $amount) {
    __id
    category
    amount
    }
}
`;

export const MARK_BILL_PAID = gql`
mutation markBillPaid($billId: Int!) {
    markBillPaid(billId: $billId) {
    __id
    billId
    }
}
`;

export const ADD_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
        user {
            __id
            email 
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
        user {
            __id
            email 
        }
    }
}
`;