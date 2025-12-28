import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900  text-white flex justify-around items-center p-4 h-14'>
      <div className="logo font-bold text-2xl flex items-center">
        <span>P@ss</span>
        <span className="text-purple-800">Fil~</span>
      </div>
      <div>

        <ul>
          <li className='flex
        gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="https://www.linkedin.com/in/anand-sharma-404675371/">Contact</a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
