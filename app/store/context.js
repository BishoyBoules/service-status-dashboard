'use client'
import { createContext, useState } from 'react'

export const contextStore = createContext({
  logged: null,
  setLogged: () => {}
})

export function ContextProvider ({ children }) {
  const [logged, setLogged] = useState(false)

  const initialValue = {
    logged: logged,
    setLogged: setLogged
  }

  return (
    <contextStore.Provider value={{ logged, setLogged }}>
      {children}
    </contextStore.Provider>
  )
}
