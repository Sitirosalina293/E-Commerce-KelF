import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import DetailItem from '../pages/Detail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import LogOut from '../pages/Logout'
import SalesReportPage from '../pages/Sales'

const Router = () => {
  return (
    <div className='Router'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/detail-item' element={<DetailItem />} />  
            <Route path='/sales-report' element={<SalesReportPage />} />  


        </Routes>
    </div>
  )
}

export default Router