import React from 'react'
import { Routes, Route } from 'react-router-dom'

// FIX: Corrected capitalization in import paths to match file names (Home.jsx, Resuit.jsx, Buycredit.jsx)
import Home from './pages/Home'
import Resuit from './pages/Resuit'
import Buycredit from './pages/Buycredit'
import Navbar from './conponents/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      {/* The Routes component relies on the Router provided by main.jsx.
        A div wraps the Routes to apply the main layout styling across all pages.
      */}

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Resuit' element={<Resuit />} />
        <Route path='/Buycredit' element={<Buycredit />} />
      </Routes>
    </div>
  )
}

export default App
