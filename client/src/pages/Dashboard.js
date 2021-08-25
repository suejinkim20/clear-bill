import React from 'react';
import BillsTable from '../components/BillsTable'
import SideNav from '../components/SideNav'
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'
import { QUERY_MY_BILLS } from '../utils/queries';
import { useQuery } from '@apollo/client';


export default function Dashboard() {
    const token = Auth.loggedIn() ? Auth.getToken() : window.location.assign('/login');

    const {loading, data} = useQuery(QUERY_MY_BILLS);

    const profile = data?.myBills || {};

    if(!token){
      return <Redirect to="/login" />;
    }
    
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            <div>
                <SideNav />
                <h2>Bills Table</h2>
                <BillsTable userData={profile}/>
            </div>
        </div>
    )
}