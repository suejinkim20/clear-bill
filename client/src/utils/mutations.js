import { gql } from '@apollo/client'

export const addBill = gql`
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

export const removeBill = gql`
mutation removeBill($billId: Int!) {
    removeBill(billId: $billId) {
    _id
    billId
    }
}
`;

export const averageBills = gql`
mutation averageBills($category: String!, $amount: Float!) {
    averageBills(category: $category, amount: $amount) {
    __id
    category
    amount
    }
}
`;

export const billsByCategory = gql`
mutation billsByCategory($category: String!, $amount: Float!) {
    billsByCategory(category: $category, amount: $amount) {
    __id
    category
    amount
    }
}
`;

export const markBillPaid = gql`
mutation markBillPaid($billId: Int!) {
    markBillPaid(billId: $billId) {
    __id
    billId
    }
}
`;

export const login = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
        __id
        username 
    }
}
`;