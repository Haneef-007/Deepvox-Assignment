import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import Orders from './pages/Orders'
import Tracking from './pages/Tracking'
import Customers from './pages/Customers'
import Discounts from './pages/Discounts'
import Ledger from './pages/Ledger'
import Taxes from './pages/Taxes'
import Settings from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-root d-flex gap">
          <Sidebar />
          <div className="content-area flex-grow-1">
            <main className="p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/discounts" element={<Discounts />} />
                <Route path="/ledger" element={<Ledger />} />
                <Route path="/taxes" element={<Taxes />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
