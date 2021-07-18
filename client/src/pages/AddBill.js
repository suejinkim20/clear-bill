import React from 'react';
import Button from '@material-ui/core/Button'
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import BillsForm from '../components/BillsForm';

export default function AddBill() {
    const [category, setCategory] = React.useState('');
    const [billObject, setBillObject] = React.useState('electric')


    return (
        <div>
            <h1>Add Bill Page</h1>
            <div>
                <SideNav />
                <CategoryField setCategory={setCategory} setBillObject={setBillObject}/>
                <BillsForm billObject={billObject} category={category}/>
            </div>
        </div>
    )
}