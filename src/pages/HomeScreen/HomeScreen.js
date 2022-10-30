import React from 'react'
import './HomeScreen.css'
import { Link } from 'react-router-dom'
import { Nav,Banner } from '../../components'

export const HomeScreen = () => {
  return (
    <div className='homeScreen'>  
      <Nav/>
      <Banner/>

      <Link to='/login'>Login</Link>
    </div>
  )
}
