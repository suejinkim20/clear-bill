import React from 'react';
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'
import { QUERY_SINGLE_BILL } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_BILL } from '../utils/mutations';

// This page will be used to update a single bill's information
// Need to write a query that queries a single bill
// Maybe instead of "Manage Bills" page, you can update the bill straight from the Dashboard
// What should "Manage Bills be then?"

export default function AddBill() {
    const [billObject, setBillObject] = React.useState('electric')

    const token = Auth.loggedIn() ? Auth.getToken() : window.location.assign('/login');

    const {loading, data} = useQuery(QUERY_SINGLE_BILL);

    const userData = data?.myBills || {};

    const [updateBill, { error, data }] = useMutation(UPDATE_BILL)

    if(!token){
      return <Redirect to="/login" />;
    }
    
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Update Bill</h1>
            <div>
                <SideNav />
                <Card className={classes.card}>
                    <h3>Bill Information</h3>
                    <List>                
                    <ListItem className={classes.listItem}>Company: {billObject[0].company}</ListItem>
                    <ListItem className={classes.listItem}>Due Date: {billObject[0].dueDate ? handleDateOutput(billObject[0].dueDate): ''}</ListItem>
                    <ListItem className={classes.listItem}>Amount: {billObject[0].amount ? handleMoneyDisplay(billObject[0].amount) : ''}</ListItem>
                    <ListItem className={classes.listItem}>Payment Status: {handleBoolean(billObject[0].paymentStatus)}</ListItem>
                    </List>
                </Card>

            </div>
        </div>
    )
}