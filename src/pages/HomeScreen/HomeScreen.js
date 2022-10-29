import React from 'react'
import './HomeScreen.css'

import { Nav,Banner } from '../../components'

export const HomeScreen = () => {
  return (
    <div className='homeScreen'>  
      <Nav/>
      <Banner/>
    </div>
  )
}
