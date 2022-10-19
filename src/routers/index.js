import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import Login from '../pages/Login'
import LogOut from '../pages/Logout'
import SalesReport from '../pages/SalesReport'

const Router = () => {
  return (
    <div className='Router'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/sales-report' element={<SalesReport />} />  
        </Routes>
    </div>
  )
}

export default Router