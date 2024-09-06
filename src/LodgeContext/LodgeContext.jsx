import React, { createContext, useState } from 'react'

export const LodgeContext = createContext() 

export const LodgeProvider = ({children}) => {

  const [menuView, setMenuView] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <LodgeContext.Provider value={{menuView, setMenuView, loggedIn, setLoggedIn}}>
        {children}
    </LodgeContext.Provider>
  )
}
