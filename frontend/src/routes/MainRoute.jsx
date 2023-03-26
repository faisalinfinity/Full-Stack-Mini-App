import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotesPage from '../pages/NotesPage'
import Signuppage from '../pages/Signuppage'
import PrivateRoute from './PrivateRoute'

const MainRoute = () => {
  return (
  <Routes>
    <Route path='/login' element={<Loginpage/>}></Route>
    <Route path='/register' element={<Signuppage/>}></Route>
    <Route path='/' element={<Homepage/>} ></Route>
    <Route path='/notes' element={<PrivateRoute><NotesPage/></PrivateRoute>}></Route>
  </Routes>
  )
}

export default MainRoute