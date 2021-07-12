import React from 'react';
import { Container } from '@material-ui/core';


export default function Home() {
    return (
        <div>
            <br></br>
            <br></br>
            <Container maxWidth="sm" style={{border: '1px solid'}}><h1 style={{textAlign: "center"}} >Welcome to Clear Bill</h1>
            <p>Clear Bill is a simple, easy to use bill tracking application. Please login and proceed to your dashboard if you are a returning user. If you are a new user, please click the signup button and enter your email address and create a password. Once logged in you will have the ability to save bills, due dates, amounts, and see future bill predictions. You can also edit and delete bills as needed. Happy billing!</p></Container>
        </div>
    )
}