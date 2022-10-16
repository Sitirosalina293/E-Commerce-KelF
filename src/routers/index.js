import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Router = () => {
  return (
    <div className='Router'>
        <Routes>
            <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  )
}

export default Router