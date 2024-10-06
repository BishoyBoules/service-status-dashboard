import { useContext } from 'react'
import { contextStore } from '@/app/store/context'
import Button from '@/app/components/Button'
import Filter from './Filter'

export default function Dashboard () {
  const context = useContext(contextStore)

  return (
    <main className='h-full bg-gray-100 p-6 w-full flex flex-col justify-start'>
      <h1 className='text-3xl font-extrabold text-center mb-10'>
        Server Dashboard
      </h1>
      <Filter />
      <section className='flex justify-center'>
        <Button
          name='Logout'
          clickHandler={() => {
            context.setLogged(false)
            localStorage.removeItem('logged')
          }}
        />
      </section>
    </main>
  )
}
