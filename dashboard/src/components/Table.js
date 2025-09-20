import React from 'react'

export default function TableCommon({ columns, data }) {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
                <thead className="table-light">
                    <tr>
                        {columns.map(col => <th key={col.key}>{col.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && (
                        <tr><td colSpan={columns.length} className="text-center small text-muted">No data</td></tr>
                    )}
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            {columns.map(col => <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}