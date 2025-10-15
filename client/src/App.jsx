import React from 'react'
import {routes, Route, Router} from 'react-router-dom'

import Home from './pages/home'
import Resuit from './pages/Resuit'
import Buycredit from './pages/Buycredit'


const App = () => {
  return (
    <div>
      <routes>
        <Route path='/' element={<Hmoe/>}/>
        <Route path='/Resuit' element={<Resuit/>}/>
        <Route path='/Buycredit' element={<Buycredit/>}/>
      </routes>
    </div>
  )
}

export default App
