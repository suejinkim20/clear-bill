import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';

export default function Login() {
    return (
        <Box component="span" label="Login" m={1}>                
        <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>
        <Button variant="contained" color="primary">
            Login
        </Button>
        </Box>
    )
}