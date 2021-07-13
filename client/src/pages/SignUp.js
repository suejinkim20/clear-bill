import React from 'react';
import { Container } from '@material-ui/core';
import { Box, TextField, Button } from '@material-ui/core';

export default function SignUp() {
    return (
        <div>
        <br></br>
        <br></br>
        <Container maxWidth="sm" style={{border: '1px solid'}}><h1 style={{textAlign: "center"}} >Please Sign Up Below:</h1>
        <Box component="span" label="Login" m={1}>                
        <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>
        <Button variant="contained" color="primary">
            Sign Up
        </Button>
        <br></br>
        <br></br>
        </Box></Container>
    </div>
)
}