import React from 'react'
import { useState } from 'react';
import {assets} from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [user, setUser] = useState(null);

  return (
    <div className='flex items-center justify-center py-4'>
      <Link to='/'>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40 ' />
      </Link>

      <div>
        {user ? 
         <div></div>
        :
         <div className='flex items-center gap-2 sm:gap-s'>
            <p className='cursor-pointer'>pricing</p>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-2 text-sm rounded-full'>Login</button>
         </div>
         }
       
    
      </div>


    </div>
  )
}

export default Navbar
