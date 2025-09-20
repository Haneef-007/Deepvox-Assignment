import React from 'react'
import { orders } from '../data/ordersData'

export default function Orders() {
    return (
        <div className="container-fluid">
            <h5 className="mb-3">Orders</h5>
            <div className="row g-3">
                {orders.map(order => (
                    <div key={order.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card card-surface h-100 shadow-sm" id='hb'>
                            <div className="card-body">
                                <h6 className="card-title">Order No: {order.id}</h6>
                                <p className="mb-1"><strong>Customer:</strong> {order.customer}</p>
                                <p className="mb-1"><strong>Amount:</strong> ${order.amount.toFixed(2)}</p>
                                <p className="mb-0">
                                    <strong>Status:</strong>{' '}
                                    <span
                                        className={
                                            order.status === 'Completed'
                                                ? 'badge bg-success'
                                                : order.status === 'Pending'
                                                ? 'badge bg-warning text-dark'
                                                : 'badge bg-secondary'
                                        }
                                    >
                                        {order.status}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}