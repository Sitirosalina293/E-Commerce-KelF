import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Admin from '../pages/admin/Admin';
import CartPage from '../pages/cart/CartPage';
import DetailProduct from '../pages/detail-product/DetailProduct';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import SalesReportPage from '../pages/sales-report/SalesReport';

const Router = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/detail-item' element={<DetailProduct />} />
        <Route path='/cart' element={<CartPage />} /> 
        <Route path='/sales-report' element={<SalesReportPage />} />  
      </Routes>
    </>
  )
}

export default Router