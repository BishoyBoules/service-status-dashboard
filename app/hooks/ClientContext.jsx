'use client'

import { useState } from 'react'
import Button from '@/app/components/Button'

const ClientContext = ({ loginHandler, signUpHandler }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <section>
      <form className='flex flex-col gap-2 justify-center items-center'>
        <group className='flex flex-row gap-2 font-extrabold'>
          <label>Username</label>
          <input type='text' onChange={e => setUsername(e.target.value)} />
        </group>
        <group className='flex flex-row gap-2 font-extrabold'>
          <label>Password</label>
          <input type='password' onChange={e => setPassword(e.target.value)} />
        </group>
        <Button
          name='Login'
          clickHandler={() => loginHandler({ username, password })}
        />
        <Button
          name='Sign Up'
          clickHandler={() => signUpHandler({ username, password })}
        />
      </form>
    </section>
  )
}

export default ClientContext
