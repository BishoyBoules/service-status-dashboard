'use client'
import { createContext, useState } from 'react'

export const contextStore = createContext({
  logged: null,
  setLogged: () => {}
})

export function ContextProvider ({ children }) {
  const [logged, setLogged] = useState(false)

  return (
    <contextStore.Provider value={{ logged, setLogged }}>
      {children}
    </contextStore.Provider>
  )
}
