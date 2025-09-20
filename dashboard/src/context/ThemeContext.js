import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }){
const [dark, setDark] = useState(() => {
const saved = localStorage.getItem('admindash-dark')
return saved ? JSON.parse(saved) : false
})

useEffect(()=>{
localStorage.setItem('admindash-dark', JSON.stringify(dark))
if(dark) document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
}, [dark])

return (
<ThemeContext.Provider value={{ dark, setDark }}>
{children}
</ThemeContext.Provider>
)
}