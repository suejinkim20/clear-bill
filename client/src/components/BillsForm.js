import React, { useState }from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BILL } from '../utils/mutations';
import { handleBoolean, handleDateTwoDigits, handleDateOutput, handleMoneyDisplay } from '../utils/helpers'

import { 
  Button, 
  Card, 
  FormControl, 
  InputAdornment, 
  InputLabel, 
  List, 
  ListItem, 
  MenuItem, 
  Select, 
  TextField } from '@material-ui/core/';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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


export default function BillsForm({billObject, category, userData}) {
  const classes = useStyles();
  console.log(category)
  console.log(billObject)

  const [categoryState, setCategory] = useState('')
  const [companyState, setCompany] = useState('')
  const [dueDateState, setDueDate] = useState('')
  const [amountState, setAmount] = useState('')
  const [paymentStatusState, setPaymentStatus] = useState('')
  const [valueState, setValueState] = useState('');
  
  // useEffect(() => setCategory(billObject[0].category), [valueState])
  // useEffect(() => setCompany(billObject[0].company), [valueState])
  // useEffect(() => setDueDate(billObject[0].dueDate), [valueState])
  // useEffect(() => setAmount(billObject[0].amount), [valueState])
  // useEffect(() => setPaymentStatus(billObject[0].paymentStatus), [valueState])

  const [addBill, { error, data }] = useMutation(ADD_BILL)

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const data = await addBill({
        variables: {
          category: categoryState, 
          company: companyState, 
          dueDate: dueDateState, 
          amount: parseFloat(amountState), 
          paymentStatus: JSON.parse(paymentStatusState),
          billOwner: userData._id
        }
      })

      setCategory('')
      setCompany('')
      setDueDate('')
      setAmount('')
      setPaymentStatus('')
      setValueState('');

      window.location.assign('/dashboard')
    } catch (error) {
      console.error(error)
    }

    alert(`You have successfully added a bill to your ${categoryState} category.`)
  }

  const handleChange = (event) => {
    // console.log('target changed')
    const { name, value } = event.target;

    if (name === 'category') {
      setCategory(value)
    } else if (name === 'company') {
      setCompany(value)
    } else if (name === 'dueDate') {
      setDueDate(value)
    } else if (name === 'amount') {
      setAmount(value)
    } else if (name === 'paymentStatus') {
      setPaymentStatus(value)
    } else {
      setValueState(value)
    }
    
    // console.log("handleChange", categoryState, companyState, dueDateState, amountState, paymentLinkState, paymentHintsState, autoPayState, paymentStatusState)

  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form noValidate autoComplete="off" value={valueState} onSubmit={handleFormSubmit} onChange={handleChange}>
          <FormControl className={classes.formControl} key={billObject[0].category} >
            <TextField
              id="categoryField"
              label="Category"
              // defaultValue={billObject[0].category}
              value={categoryState }
              name="category"
              onChange={handleChange}
            />
          </FormControl>
              
          <FormControl className={classes.formControl} key={billObject[0].company}>
            <TextField
              id="companyField"
              label="Company"
              // defaultValue={billObject[0].company}
              value={companyState}
              name="company"
              helperText="i.e. Company Name, Account Name"
              onChange={handleChange}
            />
          </FormControl>
              
          <FormControl className={classes.formControl} key={billObject[0].dueDate}>
            <TextField
              id="date"
              label="Due Date"
              type="date"
              name="dueDate"
              // defaultValue={handleDateOutput(billObject[0].dueDate) || ''}
              value={dueDateState}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl className={classes.formControl} key={billObject[0].amount} onChange={handleChange}>
            <TextField
              id="amountField"
              label="Amount Due" 
              name="amount"
              // defaultValue={billObject[0].amount || ''} 
              value={amountState}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
          </FormControl>


          <FormControl variant="outlined" className={classes.formControl} key='paymentStatus' >
            <InputLabel id="demo-simple-select-outlined-label">Payment Status</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="paymentStatus"
              // defaultValue={billObject[0].paymentStatus}
              onChange={handleChange}
            >
              <MenuItem value='false'>Not Paid</MenuItem>
              <MenuItem value='true'>Paid</MenuItem>

              {/* <MenuItem value={paymentStatusState = false}>Not Paid</MenuItem>
              <MenuItem value={paymentStatusState = true}>Paid</MenuItem> */}
            </Select>
          </FormControl>

          <Button variant="contained" type="submit" className={classes.button}>Add Bill</Button>
        </form>
      </Card>

      <Card className={classes.card}>
        <h3>Previous {category} Bill Information</h3>
        <List>                
          <ListItem className={classes.listItem}>Company: {billObject[0].company}</ListItem>
          <ListItem className={classes.listItem}>Due Date: {billObject[0].dueDate ? handleDateOutput(billObject[0].dueDate): ''}</ListItem>
          <ListItem className={classes.listItem}>Amount: {billObject[0].amount ? handleMoneyDisplay(billObject[0].amount) : ''}</ListItem>
          <ListItem className={classes.listItem}>Payment Status: {handleBoolean(billObject[0].paymentStatus)}</ListItem>
        </List>
      </Card>
    </div>

  )
}
