import React from 'react';
import CategoryField from '../components/CategoryField';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'

export default function BillForecast () {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(!token){
      return <Redirect to="/login" />;
    }

    return (
        <div>
            <h1>Bill Forecast</h1>
            <CategoryField />
            <p>component that does calculation, maybe put it in a card to make it look nice?</p>
        </div>
    )
}