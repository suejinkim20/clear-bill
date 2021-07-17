import React from 'react';
import PropTypes from 'prop-types';
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
import billsData from '../mockdata'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    
  },

});


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  console.log(billsData)
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell align="right">{row.dueDate}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.paymentStatus}</TableCell>
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

Row.propTypes = {
  row: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    amount: PropTypes.number,
    paymentLink: PropTypes.string,
    paymentHints: PropTypes.string,
    autoPay: PropTypes.bool,
    paymentStatus: PropTypes.bool,
  }),
};



export default function BillsTable() {
  
  return (
    <TableContainer component={Paper}>
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
          {billsData.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
