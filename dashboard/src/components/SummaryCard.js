import React from 'react'

export default function SummaryCard({ title, value, change }) {
    const positive = change >= 0
    return (
        <div className="card card-surface p-3 h-100" id='hb'>
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <div><b><small>{title}</small></b></div>
                    <div className="h4 mb-0">{value}</div>
                </div>
                <div className={`small d-flex align-items-center ${positive ? 'text-success' : 'text-danger'}`}>
                    {positive ? '▲' : '▼'} {Math.abs(change)}%
                </div>
            </div>
        </div>
    )
}