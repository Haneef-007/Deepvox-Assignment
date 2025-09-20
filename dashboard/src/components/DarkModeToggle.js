import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export default function DarkModeToggle(){
const { dark, setDark } = useContext(ThemeContext)
return (
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)} id="dm" />
<label className="form-check-label" htmlFor="dm">Dark Mode</label>
</div>
)
}