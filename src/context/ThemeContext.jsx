import React, { useState, useEffect } from 'react'

export const themeContext = React.createContext()

export default function ThemeContext({children}) {
    const [checked, setChecked] = useState(
        localStorage.getItem('theme') === 'dark' ? true : false
    )
    useEffect(() => {
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checked]);

    
  return (
    <themeContext.Provider
        value={{
            checked,
            setChecked
        }}
    >
        {children}
    </themeContext.Provider>
  )
}
