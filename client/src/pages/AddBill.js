import React from 'react';
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import BillsForm from '../components/BillsForm';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';


export default function AddBill() {
    const [category, setCategory] = React.useState('');
    const [billObject, setBillObject] = React.useState('electric')
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;
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
            <h1>Add Bill Page</h1>
            <div>
                <SideNav />
                <CategoryField setCategory={setCategory} setBillObject={setBillObject} userData={profile}/>
                <BillsForm category={category} billObject={billObject} userData={profile}/>
            </div>
        </div>
    )
}