import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    
  },

});

const useTableStyles = makeStyles((theme) => ({
  table: {
    padding: "30px"
  }
}));

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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment key={row.email}>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell align="right">{handleDateOutput(row.dueDate)}</TableCell>
        <TableCell align="right">{handleMoneyDisplay(row.amount)}</TableCell>
        <TableCell align="right">{handleBoolean(row.paymentStatus)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Company/Description</TableCell>
                    <TableCell>Payment Link</TableCell>
                    <TableCell align="right">Payment Hints</TableCell>
                    <TableCell align="right">AutoPay?</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row.category}>
                      <TableCell component="th" scope="row">
                        {row.description}
                      </TableCell>
                      <TableCell><Link href={row.paymentLink} target="_blank">{row.paymentLink}</Link></TableCell>
                      <TableCell align="right">{row.paymentHints}</TableCell>
                      <TableCell align="right">
                        {useRowStyles.amount}
                        {handleBoolean(row.autoPay)}
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function BillsTable(userData) {
// console.log(userData)
const classes = useTableStyles()

const userBills = userData.userData.bills
// console.log(userBills)

  return (
    <div>
            <TableContainer component={Paper} className={classes.table}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Bills</TableCell>
                    <TableCell align="right">Due Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Paid Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userBills.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          
    </div>
  );
}
