import React from 'react';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'

export default function ManageBills () {
    const token = Auth.loggedIn() ? Auth.getToken() : window.location.assign('/login');
    
    if(!token){
      return <Redirect to="/login" />;
    }

    return (
        <div>
            <h1>Manage All Your Bills</h1>
            <p>This page is in development.</p>
        </div>
    )
}