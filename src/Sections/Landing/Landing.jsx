import React from 'react'
import './Landing.css'
import Navbar from '../../Components/Navbar/Navbar'
import HeroContent from '../../Components/HeroContent/HeroContent'

const Landing = () => {
  return (
    <div className='landing'>
        <Navbar />
        <HeroContent/>
    </div>
  )
}

export default Landing