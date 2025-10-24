import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Buycredit from './pages/Buycredit.jsx'
import Result from './pages/Result.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buycredit' element={<Buycredit/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  )
}

export default App
