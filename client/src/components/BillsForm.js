import React from 'react';

import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  
}));


export default function BillsForm({billObject}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
         <FormControl>
          <TextField id="standard" label="Description" defaultValue={billObject[0].description} helperText="i.e. Company Name, Account Name"/>
        </FormControl>
        
        <FormControl>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Due Date"
              type="date"
              defaultValue={billObject[0].dueDate}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </FormControl>

        <FormControl>
          <TextField id="standard" label="Amount Due" defaultValue={billObject[0].amount} />
        </FormControl>

        <FormControl>
          <TextField id="standard" label="Payment Link" defaultValue={billObject[0].paymentLink}/>
        </FormControl>

        <FormControl>
          <TextField id="standard" label="Payment Hints" defaultValue={billObject[0].paymentHints} helperText="i.e. Associated Payment Account, Log In Hints"/>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">AutoPay</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
        >
          <MenuItem value="false">No</MenuItem>
          <MenuItem value="true">Yes</MenuItem>
        </Select>
      </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Payment Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
        >
          <MenuItem value="false">Not Paid</MenuItem>
          <MenuItem value="true">Paid</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained">Add Bill</Button>


      </div>
    </form>
  );
}
