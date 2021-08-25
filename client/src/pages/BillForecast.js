import React from 'react'
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField'
import ForecastedBill from '../components/ForecastedBill'
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'
import { QUERY_MY_BILLS } from '../utils/queries'
import { useQuery } from '@apollo/client'



export default function BillForecast() {
    const [category, setCategory] = React.useState('');
    const [billObject, setBillObject] = React.useState('')
    
    const token = Auth.loggedIn() ? Auth.getToken() : window.location.assign('/login');
    // const { data: userData } = Auth.getProfile()

    const {loading, data} = useQuery(QUERY_MY_BILLS);

    const userData = data?.myBills || {};
    // console.log(userData)
    console.log(billObject)
    console.log(data)
    console.log(category)

    if (loading) {
        return <div>Loading...</div>;
    }

    if(!token){
      return <Redirect to="/login" />;
    }

    return (
        <div>
            <SideNav />
            <h1>Bill Forecast</h1>
            <CategoryField setCategory={setCategory} setBillObject={setBillObject} userData={userData}/>
            <ForecastedBill category={category} billObject={billObject} userData={userData}/>
        </div>
    )
}