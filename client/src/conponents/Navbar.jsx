import React, { useState } from 'react'
import { assets } from '../assets/assets'
// import logo from '../assets/logo.png' // <-- optional fallback if assets.logo is undefined
import { Link } from 'react-router-dom'
// ...existing code...
const Navbar = () => {

    const [user, setUser] = useState(null);

    // debug: ensure assets contains what you expect
    console.log('assets:', assets);

  return (
    <div className='flex items-center justify-between py-4'>
        <Link to="/">
          <img src={assets.logo /* || logo */} alt="Imagify logo" className="w-28 sm:w-32 lg:w-40" />
        </Link>

        <div>
            {
            user ?
            <div></div>
            :
            <div className='flex items-center'>
                <p>pricing</p>
                <p>Login</p>
            </div>
            }
        </div>
    </div>
  
  )
}
// ...existing code...

export default Navbar