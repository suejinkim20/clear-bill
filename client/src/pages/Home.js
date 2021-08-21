import React from 'react';
import { Container, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '100%'
    },
    card: {
        padding: '40px',
        margin: '10px',
        textAlign: 'center',
        lineHeight: '1.75'

    },
    bold: {
        fontWeight: 'bold'
    }
})
export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container maxWidth="md">
                <Card className={classes.card}>
                    <h1>Welcome to Clear Bill</h1>
                    <p>Clear Bill is a simple, easy to use bill tracking application. Please login and proceed to your dashboard if you are a returning user. If you are a new user, please click the signup button and enter your email address and create a password. Once logged in you will have the ability to save bills, due dates, and amounts.</p>
                    <p>Happy billing!</p>
                    <br></br>
                    {/* <br></br>
                    <p>
                        <span className={classes.bold}>Demo Account:</span> If you are here to demo the app, please feel free to use the following log in information to see the app already set up with data:</p>
                    <p>
                        <span>Login:</span> payingOnTime@email.com
                    </p>
                    <p>
                        <span>Password:</span> 12345
                    </p>
                    <Button variant="contained" href='/login'>Log In</Button> */}

                </Card>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}