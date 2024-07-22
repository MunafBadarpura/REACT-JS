import React from 'react'

const Navbar = () => {
  return (
    <div className='py-3 w-[100%] bg-indigo-900 flex justify-center'>
        <nav className=' w-[60%] flex items-center justify-between'>
            <div className='font-bold mr-8 text-white whitespace-nowrap cursor-default'>
                <h1>TODO-APP</h1>
            </div>
            <ul className='flex gap-5 font-medium text-white cursor-pointer whitespace-nowrap'>
                <li>Home</li>
                <li>Your Tasks</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
