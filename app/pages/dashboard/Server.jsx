import { useState } from 'react'

const Server = ({ ip, status, responseTime, uptime, name }) => {
  const [hide, setHide] = useState(true)
  return (
    <section key={ip} className='bg-white p-4 shadow rounded'>
      <h1
        className='text-3xl font-bold cursor-pointer'
        onClick={() => setHide(!hide)}
      >
        {name}
      </h1>
      {!hide && (
        <>
          {' '}
          <h2 className='text-xl font-bold'>{name}</h2>
          <p>IP: {ip}</p>
          <p>Status: {status}</p>
          <p>Response Time: {responseTime}ms</p>
          <p>Uptime: {uptime}%</p>
        </>
      )}
      <span className='bg-slate-600 w-full h-0.5 mt-1 block'></span>
    </section>
  )
}

export default Server
