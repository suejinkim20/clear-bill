import React from 'react';
import { Container, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '100%'
    },
    card: {
        padding: '40px',
        margin: '10px'
    },
    para: {
        lineHeight: '1.75'
    },
    title: {
        textAlign: 'center'
    },
    subpara: {
        textAlign: 'center',

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
                    <h1 className={classes.title} >Welcome to Clear Bill</h1>
                    <p className={classes.para}>Clear Bill is a simple, easy to use bill tracking application. Please login and proceed to your dashboard if you are a returning user. If you are a new user, please click the signup button and enter your email address and create a password. Once logged in you will have the ability to save bills, due dates, and amounts.</p>
                    <p className={classes.subpara}>Happy billing!</p>
                </Card>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}