import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Thirdpage/Footer/Footer'
import CareerFirstPage from './CareerFirstPage/CareerFirstPage.js'
import Benifitandperk from './Benifitandperk/Benifitandperk.js'
import CBenifits from './CBenifits/Cbenifits.js'
import GWCposter from './GWCposter/GWCposter.js'
import Applyanyway from './ApplyAnyway/Applyanyway.js'
import './career.css'

const Career = () => {
  return (
    <>
        <Navbar/>
        <CareerFirstPage/>
        <Benifitandperk/>
        <CBenifits/>
        <GWCposter/>
        <Applyanyway/>
        <div className='careerfooter'><Footer/></div>
    </>
  )
}

export default Career