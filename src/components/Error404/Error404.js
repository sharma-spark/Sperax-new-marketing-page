import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Thirdpage/Footer/Footer'
import Pagenotfound from './Pagenotfound.js'
const Error404 = () => {
  return (
    <div>
    <Navbar/>
    <Pagenotfound/>
    <div className='footerbrandkit'><Footer/></div>
    </div>
  )
}

export default Error404