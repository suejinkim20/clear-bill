import React from 'react';

import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '10px',
      width: '400px',
    },
    display: 'flex'
  },

  formControl: {
    minWidth: '300px',
    margin: '10px'
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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    padding: '20px',
    margin: '10px',
    display: 'block'
  }
}));


export default function BillsForm({billObject, category}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card className={classes.card}>
          <form noValidate autoComplete="off">
            <div>
              <FormControl className={classes.formControl} key={billObject[0].description}>
                <TextField id="standard" label="Description" defaultValue={billObject[0].description || ''} inputComponent={billObject[0].description} helperText="i.e. Company Name, Account Name"/>
              </FormControl>
              
              <FormControl className={classes.formControl} key={billObject[0].dueDate}>
                <TextField
                  id="date"
                  label="Due Date"
                  type="date"
                  defaultValue={billObject[0].dueDate || ''}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>

              <FormControl className={classes.formControl}key={billObject[0].amount}>
                <TextField id="standard" label="Amount Due" defaultValue={billObject[0].amount || ''} />
              </FormControl>

              <FormControl className={classes.formControl} key={billObject[0].paymentLink}>
                <TextField id="standard" label="Payment Link" defaultValue={billObject[0].paymentLink || ''}/>
              </FormControl>

              <FormControl className={classes.formControl} key={billObject[0].paymentHints}>
                <TextField id="standard" label="Payment Hints" defaultValue={billObject[0].paymentHints || ''} helperText="i.e. Associated Payment Account, Log In Hints"/>
              </FormControl>

              <FormControl variant="outlined" className={classes.formControl} key={billObject[0].AutoPay}>
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
        </Card>
        <Card className={classes.card}>
          <h3>Previous {category} Bill Information</h3>
          <div>                
                  <p>Description: {billObject[0].description}</p>
                  <p>Due Date: {billObject[0].dueDate}</p>
                  <p>Amount: ${billObject[0].amount}</p>
                  <p>Payment Link: {billObject[0].paymentLink}</p>
                  <p>Payment Hints: {billObject[0].paymentHints}</p>
                  <p>AutoPay: {billObject[0].autoPay}</p>
                  <p>Payment Status: {billObject[0].paymentStatus}</p>

              </div>
        </Card>
    </div>

  )
}
