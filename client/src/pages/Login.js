import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
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

export default function Login(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
        console.log('form submitted')
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

  return (
    <div>
    <br></br>
    <br></br>
    <Container maxWidth="sm">
        <Card className={classes.card}>
            <h1 className={classes.title}>Login to Clear Bill</h1>
            <Box component="span" label="Login" className={classes.form}> 
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
                        Login
                    </Button>
                </form>
                
                <br></br>
                <br></br>
                <p>Don't have an account? Sign Up Here</p>
                <Button variant="contained" href='/signup'>Sign Up</Button>
            </Box>
        </Card>
    </Container>
    </div>
    )
}