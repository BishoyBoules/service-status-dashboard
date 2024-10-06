'use client'

import { useContext } from 'react'
import data from '@/public/data/users.json'
import ClientContext from '@/app/hooks/ClientContext'
import { contextStore } from '@/app/store/context'

const Login = () => {
  const context = useContext(contextStore)
  function loginHandler ({ username, password }) {
    const users = data.users
    const user = users.find(
      user => user.username === username && user.password === password
    )
    if (user) {
      context.setLogged(true)
    } else {
      alert("User doesn't exist, please sign up")
    }
  }
  function signUpHandler ({ username, password }) {
    const users = data.users
    const existedUser = users.find(
      user => user.username === username && user.password === password
    )

    if (existedUser) {
      alert('User already exists')
    } else {
      const user = {
        username,
        password
      }
      users.push(user)
      localStorage.setItem('user', JSON.stringify(user))
      alert('User created')
    }
  }
  return (
    <ClientContext loginHandler={loginHandler} signUpHandler={signUpHandler} />
  )
}

export default Login
