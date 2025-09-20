import React from 'react'
import SummaryCard from '../components/SummaryCard'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { productSales, salesByCategory, salesByCountry } from '../data/salesData'

export default function Dashboard() {
    const totalCustomers = 1245
    const totalRevenue = 420000
    const totalOrders = 5321
    const totalReturns = 124

    const metrics = [
        { title: 'Total Customers', value: totalCustomers, change: 3.4 },
        { title: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, change: 1.8 },
        { title: 'Total Orders', value: totalOrders, change: -0.9 },
        { title: 'Total Returns', value: totalReturns, change: 0.2 },
    ]

    const barData = productSales.map(p => ({
        product: p.product,
        Revenue: p.revenue,
        GrossMargin: p.grossMargin,
    }))
    const barKeys = ['GrossMargin', 'Revenue']

    const totalCountry = salesByCountry.reduce((s, c) => s + c.value, 0)
    const salesCountryWithPct = salesByCountry.map(c => ({
        ...c,
        pct: ((c.value / totalCountry) * 100).toFixed(1),
    }))

    return (
        <div className="container-fluid">
            <div className="row g-3 mb-3">
                {metrics.map(m => (
                    <div key={m.title} className="col-12 col-sm-6 col-md-3">
                        <SummaryCard title={m.title} value={m.value} change={m.change} />
                    </div>
                ))}
            </div>

            <div className="row g-3 mb-3">
                <div className="col-12">
                    <div className="card card-surface p-3" style={{ height: 420 }}>
                        <h6>Product Sales (Gross Margin vs Revenue)</h6>
                        <div style={{ height: 360 }}>
                            <ResponsiveBar
                                data={barData}
                                keys={barKeys}
                                indexBy="product"
                                margin={{ top: 20, right: 60, bottom: 60, left: 60 }}
                                padding={0.3}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={{ scheme: 'nivo' }}
                                groupMode="grouped"
                                axisBottom={{ tickSize: 5, tickPadding: 5 }}
                                axisLeft={{ tickSize: 5, tickPadding: 5 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-3">
                <div className="col-12 col-lg-6">
                    <div className="card card-surface p-3" style={{ height: 420 }}>
                        <h6 >Sales by Product Category</h6>
                        <div style={{ height: 360 }}>
                            <ResponsivePie
                                data={salesByCategory}
                                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                innerRadius={0.5}
                                padAngle={0.7}
                                cornerRadius={3}
                                activeOuterRadiusOffset={8}
                                borderWidth={1}
                                arcLinkLabelsSkipAngle={10}
                                arcLabelsSkipAngle={10}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card card-surface p-3" style={{ height: 420 }}>
                        <h6 className="mb-3">Sales by Country</h6>
                        <table className="table table-sm table-striped">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Sales</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesCountryWithPct.map(s => (
                                    <tr key={s.country}>
                                        <td>{s.country}</td>
                                        <td>{s.value.toLocaleString()}</td>
                                        <td>{s.pct}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
