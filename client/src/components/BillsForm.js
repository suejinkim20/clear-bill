import React, { useState }from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BILL } from '../utils/mutations';
import { QUERY_BILLS, QUERY_USER } from '../utils/queries';

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


export default function BillsForm({billObject, category}) {
  const classes = useStyles();
  // console.log(billObject)
  const [categoryState, setCategory] = useState('')
  const [descriptionState, setDescription] = useState('')
  const [dueDateState, setDueDate] = useState('')
  const [amountState, setAmount] = useState('')
  const [paymentLinkState, setPaymentLink] = useState('')
  const [paymentHintsState, setPaymentHints] = useState('')
  const [autoPayState, setAutoPay] = useState('')
  const [paymentStatusState, setPaymentStatus] = useState('')
  const [valueState, setValueState] = useState('');

  // useEffect(() => setCategory(billObject[0].category), [valueState])
  // useEffect(() => setDescription(billObject[0].description), [valueState])
  // useEffect(() => setDueDate(billObject[0].dueDate), [valueState])
  // useEffect(() => setAmount(billObject[0].amount), [valueState])
  // useEffect(() => setPaymentLink(billObject[0].paymentLink), [valueState])
  // useEffect(() => setPaymentHints(billObject[0].paymentHints), [valueState])
  // useEffect(() => setAutoPay(billObject[0].autoPay), [valueState])
  // useEffect(() => setPaymentStatus(billObject[0].paymentStatus), [valueState])

  const [addBill, { error, data }] = useMutation(ADD_BILL, {
    update(cache, { data: { addBill } }) {
      // console.log(cache)
      // console.log(data)
      try {
        const { bills } = cache.readQuery({ query: QUERY_BILLS })

        cache.writeQuery({
          query: QUERY_BILLS,
          data: { bills: [addBill, ...bills] },
        })
      } catch (error) {
        console.error(error)
      }

      const userVariable = cache.readQuery({ query: QUERY_USER });
      // console.log(userVariable)
      const user = userVariable.user
      // console.log(user)
      cache.writeQuery({
        query: QUERY_USER,
        data: { user: { ...user, bills: [...user.bills, addBill] } },
      });
    }
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      // console.log("event under handleFormSubmit", event)
      // console.log("state variables under handleFormSubmit", categoryState, descriptionState, dueDateState, amountState, paymentLinkState, paymentHintsState, autoPayState, paymentStatusState)
      // console.log("category", categoryState)
      const data = await addBill({
        variables: {
          category: categoryState, 
          description: descriptionState, 
          dueDate: dueDateState, 
          amount: parseFloat(amountState), 
          paymentLink: paymentLinkState, 
          paymentHints: paymentHintsState, 
          autoPay: JSON.parse(autoPayState), 
          paymentStatus: JSON.parse(paymentStatusState)
        }
      })
      // console.log(data)
      // console.log("after awaiting addBill", categoryState, descriptionState, dueDateState, amountState, paymentLinkState, paymentHintsState, autoPayState, paymentStatusState)

      // setCategory('')
      // setDescription('')
      // setDueDate('')
      // setAmount('')
      // setPaymentLink('')
      // setPaymentHints('')
      // setAutoPay('')
      // setPaymentStatus('')
      // setValueState('');
    } catch (error) {
      console.error(error)
    }

    alert(`You have successfully added a bill to your ${categoryState} category.`)
  }

  const handleChange = (event) => {
    // console.log('target changed')
    const { name, value } = event.target;

    if (name == 'category') {
      setCategory(value)
    } else if (name == 'description') {
      setDescription(value)
    } else if (name == 'dueDate') {
      setDueDate(value)
    } else if (name == 'amount') {
      setAmount(value)
    } else if (name == 'paymentLink') {
      setPaymentLink(value)
    } else if (name == 'paymentHints') {
      setPaymentHints(value)
    } else if (name == 'autoPay') {
      setAutoPay(value)
    } else if (name == 'paymentStatus') {
      setPaymentStatus(value)
    } else {
      setValueState(value)
    }
    
    // console.log("handleChange", categoryState, descriptionState, dueDateState, amountState, paymentLinkState, paymentHintsState, autoPayState, paymentStatusState)

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

  const handleDateTwoDigits = (num) => {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  const handleDateOutput = (unix) => {
    let aDate = Math.floor(unix)
    let a = new Date(aDate),
      year = a.getFullYear(),
      months = ['1','2','3','4','5','6','7','8','9','10','11','12'],
      month = months[a.getMonth()],
      date = a.getDate()

    const dateFormat = `${year}-${handleDateTwoDigits(month)}-${handleDateTwoDigits(date)}` 
    return dateFormat
  }

  const handleMoneyDisplay = (amount) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
        });
    return formatter.format(amount)
  }
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
              
          <FormControl className={classes.formControl} key={billObject[0].description}>
            <TextField
              id="descriptionField"
              label="Description"
              // defaultValue={billObject[0].description}
              value={descriptionState}
              name="description"
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

          <FormControl className={classes.formControl} key={billObject[0].paymentLink} >
            <TextField
              id="paymentLinkField"
              label="Payment Link"
              name="paymentLink"
              // defaultValue={billObject[0].paymentLink || ''}
              value={paymentLinkState}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl className={classes.formControl} key={billObject[0].paymentHints} >
            <TextField
              id="paymentHintsField"
              label="Payment Hints" 
              // defaultValue={billObject[0].paymentHints || ''} 
              name="paymentHints"

              value={paymentHintsState}
              helperText="i.e. Associated Payment Account, Log In Hints"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl} key='autoPay' >
            <InputLabel id="simple-select-outlined-label">AutoPay</InputLabel>
            <Select
              labelId="simple-select-outlined-label"
              id="simple-select-outlined"
              name="autoPay"

              // defaultValue={billObject[0].autoPay}
              onChange={handleChange}
            >
              <MenuItem value='false'>No</MenuItem>
              <MenuItem value='true'>Yes</MenuItem>

              {/* <MenuItem value={autoPayState = false}>No</MenuItem>
              <MenuItem value={autoPayState = true}>Yes</MenuItem> */}
            </Select>
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
          <ListItem className={classes.listItem}>Description: {billObject[0].description}</ListItem>
          <ListItem className={classes.listItem}>Due Date: {billObject[0].dueDate ? handleDateOutput(billObject[0].dueDate): ''}</ListItem>
          <ListItem className={classes.listItem}>Amount: {billObject[0].amount ? handleMoneyDisplay(billObject[0].amount) : ''}</ListItem>
          <ListItem className={classes.listItem}>Payment Link: {billObject[0].paymentLink}</ListItem>
          <ListItem className={classes.listItem}>Payment Hints: {billObject[0].paymentHints}</ListItem>
          <ListItem className={classes.listItem}>AutoPay: {handleBoolean(billObject[0].autoPay)}</ListItem>
          <ListItem className={classes.listItem}>Payment Status: {handleBoolean(billObject[0].paymentStatus)}</ListItem>
        </List>
      </Card>
    </div>

  )
}
