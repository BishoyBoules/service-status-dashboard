export default function Dashboard () {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold'>Server Dashboard</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {/* {servers.map(server => (
          <div key={server.ip} className='bg-white p-4 shadow rounded'>
            <h2 className='text-xl font-bold'>{server.name}</h2>
            <p>IP: {server.ip}</p>
            <p>Status: {server.status}</p>
            <p>Response Time: {server.responseTime}ms</p>
            <p>Uptime: {server.uptime}%</p>
          </div>
        ))} */}
        hello
      </div>
    </div>
  )
}

// export async function getServerSideProps (context) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/servers.json`)
//   const servers = await res.json()

//   return {
//     props: {
//       session, // Pass the session here
//       servers
//     }
//   }
// }
