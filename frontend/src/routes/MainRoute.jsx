import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../pages/Loginpage'
import Signuppage from '../pages/Signuppage'

const MainRoute = () => {
  return (
  <Routes>
    <Route path='/login' element={<Loginpage/>}></Route>
    <Route path='/register' element={<Signuppage/>}></Route>
    <Route path='/' element={<h1>Homepage</h1>} ></Route>
  </Routes>
  )
}

export default MainRoute