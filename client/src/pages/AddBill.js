import React from 'react';
import Button from '@material-ui/core/Button'
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import BillsForm from '../components/BillsForm';

export default function AddBill() {
    const [category, setCategory] = React.useState('');
    const [billObject, setBillObject] = React.useState('electric')


    function MockData() {
        console.log(billObject)

        return(
            <div>


                <h3>updated using state</h3>
                
                <p>Description: {billObject[0].description}</p>
                <p>Due Date: {billObject[0].dueDate}</p>
                <p>Amount: {billObject[0].amount}</p>
                <p>Payment Link: {billObject[0].paymentLink}</p>
                <p>Payment Hints: {billObject[0].paymentHints}</p>
                <p>AutoPay: {billObject[0].autoPay}</p>
                <p>Payment Status: {billObject[0].paymentStatus}</p>

            </div>
            )
    }

    return (
        <div>
            <h1>Add Bill Page</h1>
            <div>
                <SideNav />
                <CategoryField setCategory={setCategory} setBillObject={setBillObject}/>
                <p>{category}</p>
                <h2>Form Here</h2>
                <MockData billObject={billObject} />
                <BillsForm billObject={billObject} />
            </div>
        </div>
    )
}