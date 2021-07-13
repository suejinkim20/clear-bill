import React from 'react';
import { Box, Button, Container, TextField } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

export default function Login() {
//   const classes = useStyles();

  return (
    <div>
    <br></br>
    <br></br>
    <Container maxWidth="sm" style={{border: '1px solid'}}><h1 style={{textAlign: "center"}} >Login</h1>
    <Box component="span" label="Login" m={1}> 
        <form noValidate autoComplete="off">   
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>
        <Button variant="contained" color="primary">
            Login
        </Button>
        <br></br>
        <br></br>
    </Box></Container>
    </div>
    )
}