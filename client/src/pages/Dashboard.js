import React from 'react';

import BillsTable from '../components/BillsTable'
import SideNav from '../components/SideNav'


export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div>
                <SideNav />
                <h2>Bills Table</h2>
                <BillsTable />
            </div>
        </div>
    )
}