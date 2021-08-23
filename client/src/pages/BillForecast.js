import React from 'react';
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

function ForecastedBill() {
    return(
        <div>
            <p>Forecasted bill here</p>
        </div>
    )
}

export default function BillForecast () {
    const [category, setCategory] = React.useState('');
    const [billObject, setBillObject] = React.useState('')
    
    const token = Auth.loggedIn() ? Auth.getToken() : window.location.assign('/login');
    const { data: userData } = Auth.getProfile()

    const {loading, data} = useQuery(QUERY_USER,
        { variables: { profileId: userData._id },
    });

    const profile = data?.user || {};

    if(!token){
      return <Redirect to="/login" />;
    }

    return (
        <div>
            <SideNav />
            <h1>Bill Forecast</h1>
            <CategoryField setCategory={setCategory} setBillObject={setBillObject} userData={profile}/>
            <p>component that does calculation, maybe put it in a card to make it look nice</p>
            <ForecastedBill />
        </div>
    )
}