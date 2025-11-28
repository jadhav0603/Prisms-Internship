import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'


const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default PagesRouter
