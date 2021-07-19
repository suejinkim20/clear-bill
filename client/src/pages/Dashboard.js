import React from 'react';
import BillsTable from '../components/BillsTable'
import SideNav from '../components/SideNav'
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'


export default function Dashboard() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(!token){
      return <Redirect to="/" />;
    }
    
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div>
                <SideNav />
                <h2>Bills Table</h2>
                <BillsTable />
            </div>
        </div>
    )
}