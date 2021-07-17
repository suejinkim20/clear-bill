import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import billsData from '../mockdata'

import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function CategoryField({setCategory, setBillObject }) {
  const classes = useStyles();

  const getBillsData = (data, category) => {
    let selectedCategory = category

    const dataOutput = data.filter(function(bill) {
        return bill.category == selectedCategory
    })
    console.log(dataOutput)

    setBillObject(dataOutput)
  }

  const handleChange = (e) => {
    setCategory(e)
    getBillsData(billsData, e)

  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" 
          onChange={(e) => handleChange(e.target.value)}
          label="Category"
        >
          <MenuItem value=""><em>Select Category</em></MenuItem>
          <MenuItem value="Electric">Electric/Utility</MenuItem>
          <MenuItem value="Water">Water/Utility</MenuItem>
          <MenuItem value="Car Payment">Car Payment</MenuItem>
          <MenuItem value="Cell Phone">Cell Phone</MenuItem>
          <MenuItem value="Internet">Internet</MenuItem>
        </Select>
      </FormControl>



    </div>
  );
}
