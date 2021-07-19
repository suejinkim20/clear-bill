import React from 'react';
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import BillsForm from '../components/BillsForm';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth'


export default function AddBill() {
    const [category, setCategory] = React.useState('');
    const [billObject, setBillObject] = React.useState('')

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(!token){
      return <Redirect to="/login" />;
    }

    return (
        <div>
            <h1>Add Bill Page</h1>
            <div>
                <SideNav />
                <CategoryField setCategory={setCategory} setBillObject={setBillObject}/>
                <BillsForm category={category} billObject={billObject} />
            </div>
        </div>
    )
}