'use client'

import { useState, useEffect } from 'react'
import Button from '@/app/components/Button'
import Server from './Server'

const Filter = () => {
  const [servers, setServers] = useState()
  const [constServers, setConstServers] = useState()
  const [sortedBy, setSortedBy] = useState('name')

  useEffect(() => {
    async function fetchData () {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/data/servers.json`)
        .then(res => res.json())
        .then(data => {
          setServers(data.servers)
          setConstServers(data.servers)
        })
    }
    fetchData()
  }, [])

  function handleChange (e) {
    if (!servers) {
      setServers(constServers)
      return
    } else {
      setServers(() => {
        return constServers.filter(server =>
          server.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      })
    }
  }

  function compare (a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  }

  function handleSorting (e) {
    setSortedBy(e)
    setServers(() => {
      return servers.sort((a, b) => {
        if (sortedBy === 'name') {
          return compare(a.name, b.name)
        } else if (sortedBy === 'ip') {
          return compare(a.ip, b.ip)
        } else if (sortedBy === 'responseTime') {
          return compare(a.responseTime, b.responseTime)
        } else if (sortedBy === 'uptime') {
          return compare(a.uptime, b.uptime)
        }
      })
    })
  }

  return (
    <section className='my-10'>
      <section className='flex justify-start gap-4 my-4'>
        <label className='mr-2 font-bold'>Enter name</label>
        <input
          className='font-semibold rounded-lg px-3'
          type='text'
          onChange={handleChange}
        />
        <Button name='Filter' clickHandler={handleChange} />
      </section>
      <section className='flex justify-start gap-4 my-4'>
        <label className='mr-2 font-bold'>
          Sort by
          <select
            name='selectedFruit'
            className='ml-2 px-3'
            onChange={e => handleSorting(e.target.value)}
          >
            <option value='name'>Name</option>
            <option value='ip'>IP address</option>
            <option value='responseTime'>Response time</option>
            <option value='uptime'>Uptime</option>
          </select>
        </label>
        <Button name='Sort' clickHandler={handleSorting} />
      </section>
      {servers ? (
        servers.map(server => (
          <Server
            key={server.ip}
            ip={server.ip}
            status={server.status}
            responseTime={server.responseTime}
            uptime={server.uptime}
            name={server.name}
          />
        ))
      ) : (
        <p className='text-xl font-bold text-center p-5'>Loading...</p>
      )}
    </section>
  )
}

export default Filter
