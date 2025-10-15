import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Resuit from './pages/Resuit'
import Buycredit from './pages/Buycredit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Resuit' element={<Resuit />} />
        <Route path='/Buycredit' element={<Buycredit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App