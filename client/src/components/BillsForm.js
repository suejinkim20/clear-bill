import React, { useState }from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BILL } from '../utils/mutations';
import { QUERY_BILLS } from '../utils/queries';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '10px',
      width: '450px',
    },
    display: 'flex'
  },

  formControl: {
    minWidth: '95%',
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
    padding: '10px 40px 30px 30px',
    margin: '15px 15px 50px 15px',
    display: 'block'
  },
  listItem: {
    border: 'solid 0.5px lightGrey',
    fontSize: 16,
    padding: '15px',
    borderRadius: '4px',
    margin: '20px 12px',
  },
  button: {
    margin: '10px',
    background: '#3f51b5;',
    color: 'white',
  }
}));


export default function BillsForm({billObject, category}) {
  const classes = useStyles();

  const [formState, setFormState] = useState({ 
    category: '',
    description: '',
    dueDate: '',
    amount: '',
    paymentLink: '',
    paymentHints: '',
    autoPay: '',
    paymentStatus: ''
  });

  const [addBill, { error, data }] = useMutation(ADD_BILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await addBill({
        variables: { ...formState }
      })

      setFormState({
        category: '',
        description: '',
        dueDate: '',
        amount: '',
        paymentLink: '',
        paymentHints: '',
        autoPay: '',
        paymentStatus: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleBoolean = (bool) => {
    if (bool == true) {
      return "Yes"
    } else if (bool == false){
      return "No"
    }else {
      return ""
    }
  }
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
          <FormControl className={classes.formControl} key={billObject[0].category} onChange={handleChange}>
            <TextField
              id="standard"
              label="Category"
              defaultValue={billObject[0].category || ''}
              name="category"
            />
          </FormControl>
              
          <FormControl className={classes.formControl} key={billObject[0].description} onChange={handleChange}>
            <TextField
              id="standard"
              label="Description"
              defaultValue={billObject[0].description || ''}
              name="description"
              helperText="i.e. Company Name, Account Name"
            />
          </FormControl>
              
          <FormControl className={classes.formControl} key={billObject[0].dueDate} onChange={handleChange}>
            <TextField
              id="date"
              label="Due Date"
              type="date"
              name="dueDate"
              defaultValue={billObject[0].dueDate || ''}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl className={classes.formControl} key={billObject[0].amount} onChange={handleChange}>
            <TextField id="standard" label="Amount Due" defaultValue={billObject[0].amount || ''} />
          </FormControl>

          <FormControl className={classes.formControl} key={billObject[0].paymentLink} onChange={handleChange}>
            <TextField id="standard" label="Payment Link" defaultValue={billObject[0].paymentLink || ''}/>
          </FormControl>

          <FormControl className={classes.formControl} key={billObject[0].paymentHints} onChange={handleChange}>
            <TextField id="standard" label="Payment Hints" defaultValue={billObject[0].paymentHints || ''} helperText="i.e. Associated Payment Account, Log In Hints"/>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl} key={billObject[0].autoPay} onChange={handleChange}>
            <InputLabel id="demo-simple-select-outlined-label">AutoPay</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
            >
              <MenuItem value="false">No</MenuItem>
              <MenuItem value="true">Yes</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl} onChange={handleChange}>
            <InputLabel id="demo-simple-select-outlined-label">Payment Status</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
            >
              <MenuItem value="false">Not Paid</MenuItem>
              <MenuItem value="true">Paid</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" type="submit" className={classes.button}>Add Bill</Button>
        </form>
      </Card>

      <Card className={classes.card}>
        <h3>Previous {category} Bill Information</h3>
        <List>                
          <ListItem className={classes.listItem}>Description: {billObject[0].description}</ListItem>
          <ListItem className={classes.listItem}>Due Date: {billObject[0].dueDate}</ListItem>
          <ListItem className={classes.listItem}>Amount: ${billObject[0].amount}</ListItem>
          <ListItem className={classes.listItem}>Payment Link: {billObject[0].paymentLink}</ListItem>
          <ListItem className={classes.listItem}>Payment Hints: {billObject[0].paymentHints}</ListItem>
          <ListItem className={classes.listItem}>AutoPay: {handleBoolean(billObject[0].autoPay)}</ListItem>
          <ListItem className={classes.listItem}>Payment Status: {handleBoolean(billObject[0].paymentStatus)}</ListItem>
        </List>
      </Card>
    </div>

  )
}
