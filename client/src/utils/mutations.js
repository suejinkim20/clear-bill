import { gql } from '@apollo/client'

export const addBill = gql`
mutation addBill($category: String!, $description: String!, $dueDate: String!, $amount: Float!, $paymentLink: String!, $paymentHints: String!, $autoPay: Boolean!, $paymentStatus: Boolean!) {
    addBill(category: $category, description: $description, dueDate: $dueDate, amount: $amount, paymentLink: $paymentLink, paymentHints: $paymentHints, autoPay: $autoPay, paymentStatus: $paymentStatus)
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
`;

// export const CREATE_LOGIN = gql`
// mutation createLogin($
// }
// `;

// export const CREATE_SIGNUP = gql'
// mutation createSignUp($){
// }
// ';