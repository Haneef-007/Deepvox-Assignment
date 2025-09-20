import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaChartPie,
  FaShoppingCart,
  FaClipboardList,
  FaTruck,
  FaUsers,
  FaTag,
  FaFileInvoiceDollar,
  FaReceipt,
  FaCog,
  FaMoon,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'

const groupedMenu = {
  Marketing: [
    { to: '/dashboard', label: 'Dashboard', icon: <FaChartPie /> },
    { to: '/marketplace', label: 'Marketplace', icon: <FaShoppingCart /> },
    { to: '/orders', label: 'Orders', icon: <FaClipboardList /> },
    { to: '/tracking', label: 'Tracking', icon: <FaTruck /> },
    { to: '/customers', label: 'Customers', icon: <FaUsers /> },
    { to: '/discounts', label: 'Discounts', icon: <FaTag /> },
  ],
  Payments: [
    { to: '/ledger', label: 'Ledger', icon: <FaFileInvoiceDollar /> },
    { to: '/taxes', label: 'Taxes', icon: <FaReceipt /> },
  ],
  Settings: [
    { to: '/settings', label: 'Settings', icon: <FaCog /> },
  ],
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, setDark } = useContext(ThemeContext)
  const loc = useLocation()

  return (
    <aside
      className={`sidebar d-flex flex-column border-end ${
        collapsed ? 'collapsed' : ''
      } ${mobileOpen ? 'open' : ''}`}
    >
      <div className="brand d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {!collapsed && <strong>Admin</strong>}
        </div>
        <div className="d-flex gap-1 align-items-center">
          <button
            className="btn btn-sm"
            onClick={() => setCollapsed((c) => !c)}
            aria-label="collapse"
          >
            {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>
          <button
            className="btn btn-sm btn-outline-secondary d-md-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="mobile"
          >
            ☰
          </button>
        </div>
      </div>

      <nav className="nav flex-column px-2 mt-3">
        {Object.entries(groupedMenu).map(([section, items]) => (
          <div key={section} className="mb-3">
            {!collapsed && (
              <small className="text-uppercase px-2 d-block mb-1">
                {section}
              </small>
            )}
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link d-flex align-items-center py-2 ${
                  loc.pathname === item.to ? 'fw-bold' : ''
                }`}
              >
                <div style={{ width: 28 }} className="text-center">
                  {item.icon}
                </div>
                {!collapsed && <span className="ms-2">{item.label}</span>}
              </Link>
            ))}

            {section === 'Settings' && !collapsed && (
              <div className="px-3 mt-2 d-flex align-items-center gap-2">
                <div className="form-check form-switch m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkToggle"
                    checked={dark}
                    onChange={(e) => setDark(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="darkToggle">
                    Dark Mode
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
