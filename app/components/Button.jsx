'use client'

import Link from 'next/link'

const Button = ({ clickHandler, name }) => {
  return (
    <Link
      href='#'
      className='bg-slate-800 rounded-lg px-5 py-2 hover:bg-slate-500 text-white'
      onClick={clickHandler}
    >
      {name}
    </Link>
  )
}

export default Button
