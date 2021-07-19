import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Box, Button, Container, TextField, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    card: {
        padding: '40px',
        margin: '10px',
        textAlign: 'center'
    },
    para: {
        lineHeight: '1.75'
    },
    title: {
        textAlign: 'center'
    },
    form: {
        display: 'block',
        margin: '10px'
    },
    inputBox: {
        margin: '10px',
        width: '350px',
        textAlign: 'center'
    }
})   


export default function SignUp() {
    const classes = useStyles();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };    
    return (
        <div>
        <br></br>
        <br></br>
        <Container maxWidth="sm">
            <Card className={classes.card}>
                <h1 className={classes.title}>Please Sign Up Below:</h1>
                <Box component="span" label="Login" m={1}>                
                <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>   
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        className={classes.inputBox}
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        className={classes.inputBox}
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Sign Up
                    </Button>
                </form>

                <br></br>
                <br></br>
                <p>Already have an account? Log In Here</p>
                <Button variant="contained" href='/login'>Log In</Button>

                </Box>
            </Card>
        </Container>
    </div>
)
}