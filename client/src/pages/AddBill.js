import React from 'react';
import Button from '@material-ui/core/Button'
import SideNav from '../components/SideNav'
import CategoryField from '../components/CategoryField';
import BillsForm from '../components/BillsForm';

export default function AddBill() {
    const [category, setCategory] = React.useState('');

    const [billObject, setBillObject] = React.useState('')

    const [description, setDescription] = React.useState('');
    const [dueDate, setDueDate] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [paymentLink, setPaymentLink] = React.useState('');
    const [paymentHints, setPaymentHints] = React.useState('');
    const [autoPay, setAutoPay] = React.useState('');
    const [paymentStatus, setPaymentStatus] = React.useState('');


    function MockData() {
        console.log(billObject)

        return(
            <div>
                <h3>hard coded:</h3>
                {/* <p>Description: {mockData[0].description}</p>
                <p>Due Date: {mockData[0].dueDate}</p>
                <p>Amount: {mockData[0].amount}</p>
                <p>Payment Link: {mockData[0].paymentLink}</p>
                <p>Payment Hints: {mockData[0].paymentHints}</p>
                <p>AutoPay: {mockData[0].autoPay}</p>
                <p>Payment Status: {mockData[0].paymentStatus}</p> */}


                <h3>updated using state</h3>
                
                <p>Description: {billObject[0].description}</p>
                <p>Due Date: {billObject[0].dueDate}</p>
                <p>Amount: {billObject[0].amount}</p>
                <p>Payment Link: {billObject[0].paymentLink}</p>
                <p>Payment Hints: {billObject[0].paymentHints}</p>
                <p>AutoPay: {billObject[0].autoPay}</p>
                <p>Payment Status: {billObject[0].paymentStatus}</p>

                

                <p>MockData here</p>
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
                <p>need to get data based on category variable and return bill object to the bill form</p>
                <MockData />
                <h2>Form Here</h2>
                <BillsForm
                    category={category}
                    description={description}
                    dueDate= {dueDate}
                    amount={amount}
                    paymentLink={paymentLink}
                    paymentHints={paymentHints}
                    autoPay={autoPay}
                    paymentStatus={paymentStatus}
            
                />
            </div>
        </div>
    )
}