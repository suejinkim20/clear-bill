import React from 'react';
import { handleBoolean, handleDateTwoDigits, handleDateOutput, handleMoneyDisplay } from '../utils/helpers'

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
import Badge from '@material-ui/core/Badge'
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


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const handleAlert = (a) => {
    if (a === false) {
      return "!"
    } else {
      return null
    }
  }
  const defaultProps = {
    color: 'secondary', 
    children: handleBoolean(row.paymentStatus)
  }
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
        <TableCell align="right">{row.company}</TableCell>
        <TableCell align="right">{handleDateOutput(row.dueDate)}</TableCell>
        <TableCell align="right">{handleMoneyDisplay(row.amount)}</TableCell>
        <TableCell align="right">
          <Badge badgeContent={handleAlert(row.paymentStatus)} {...defaultProps}></Badge>
        </TableCell>
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
                    <TableCell>Due Date</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell align="right">Paid Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row.category}>
                      <TableCell component="th" scope="row">
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
console.log(userData)
const classes = useTableStyles()

const userBills = userData.userData || []
console.log(userBills)

  return (
    <div>
            <TableContainer component={Paper} className={classes.table}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Bills</TableCell>
                    <TableCell align="right">Company</TableCell>
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
