import { gql } from '@apollo/client'

export const ADD_BILL = gql`
mutation addBill(
    $category: String, 
    $company: String, 
    $dueDate: String, 
    $amount: Float, 
    $paymentStatus: Boolean
    $billOwner: ID
) {
    addBill(
        category: $category, 
        company: $company, 
        dueDate: $dueDate, 
        amount: $amount, 
        paymentStatus: $paymentStatus
        billOwner: $billOwner
    ) {
        _id
        category
        company
        dueDate
        amount
        billOwner {
          email
        }
    }
}
`;

export const UPDATE_BILL = gql`
mutation updateBill(
    $category: String, 
    $company: String, 
    $dueDate: String, 
    $amount: Float, 
    $paymentStatus: Boolean
) {
    updateBill(
        category: $category, 
        company: $company, 
        dueDate: $dueDate, 
        amount: $amount, 
        paymentStatus: $paymentStatus
    ) {
    _id
    }
}
`;



export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
    token
        user {
            _id
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
                _id
                email 
            }
        }
    }
`;