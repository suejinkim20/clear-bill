import React from 'react';
import BillsTable from '../components/BillsTable'
import SideNav from '../components/SideNav'
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';


export default function Dashboard() {
    const token = Auth.loggedIn() ? Auth.getToken() : window.location.assign('/login');
    const { data: userData } = Auth.getProfile()

    const {loading, data} = useQuery(QUERY_USER,
        { variables: { profileId: userData._id },
    });

    const profile = data?.user || {};

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