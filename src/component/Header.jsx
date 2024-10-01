import React from 'react';
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar';

function Header() {
  return (
    <header className='flex justify-between p-3 bg-slate-900 z-1'>
      <NavLink to='/'>
      <h2 className='text-3xl font-bold text-green-500 text-center mt-2'>Portfolio.</h2></NavLink>
      <Navbar />
    </header>
  )
}

export default Header

