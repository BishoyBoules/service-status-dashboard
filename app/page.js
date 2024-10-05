'use client'
import { useContext } from 'react'
import Login from './pages/Login/page.jsx'
import Dashboard from './pages/dashboard/page.jsx'
import { contextStore } from './store/context.js'

export default function Home () {
  const context = useContext(contextStore)

  return (
    <main className='flex justify-center items-center h-screen'>
      {!context.logged && <Login />}
      {context.logged && <Dashboard />}
    </main>
  )
}
