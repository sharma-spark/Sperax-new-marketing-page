import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Thirdpage/Footer/Footer'
import Brandkitcontents from './Brandkitcontents/Brandkitcontents.js'
import './brandkit.css'

const Brandkit = () => {
  return (
    <>
    <Navbar/>
    <Brandkitcontents/>
    <div className='footerbrandkit'><Footer/></div>
    </>
  )
}

export default Brandkit