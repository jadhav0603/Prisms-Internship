import React from 'react'
import {useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <div className='w-full flex justify-end'>
      <button
                onClick={handleLogout}
                className='m-5 bg-blue-200'
            > L O G O U T </button>
      </div>
      <h1 className='mb-6'>Welcome User</h1>
      <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nobis est saepe odio reprehenderit doloribus temporibus, iste eos porro, cum quibusdam, facilis quos architecto optio tempora sequi ex ipsum deleniti?</p>
      
    </div>
  )
}

export default Home
