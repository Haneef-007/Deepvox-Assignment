import React from 'react'
import TableCommon from '../components/Table'
import { customers } from '../data/customerData'

export default function Customers() {
    const columns = [
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' },
        { key: 'country', title: 'Country' },
    ]
    return (
        <div className="container-fluid">
            <h5>Customers</h5>
            <div className="card card-surface p-3">
                <TableCommon columns={columns} data={customers} />
            </div>
        </div>
    )
}