import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Thirdpage/Footer/Footer'
import Aboutmainpage from './Aboutmainpage.js'
import './aboutus.css'
const Aboutus = () => {
  return (
    <>
        <Navbar/>
        <Aboutmainpage/>
        <div className='aboutfooter'><Footer/></div>
        
    </>
    
  )
}

export default Aboutus