import React from 'react'
import './CareerFirstPage.css'
import carrow from './Carrow.svg'
import PhotoSlider from './Photoslider/Photoslider.js'
import fpbg from './fpbg.svg'
const CareerFirstPage = () => {
  return (
    <div className='Careerfp' style={{ backgroundImage: `url(${fpbg})` }}>
        <div className='Cheadleft'>
            <p>Build your future at Sperax</p>
            <span>Success at Sperax means working fast and fun in a connected community. You will love working with us if you are adaptive, communicative, creative, and most of all, passionate about building financial freedom through blockchain technology. Sperax is growing fast, with high impact team members from across the globe.
            <br/>Are you ready to join us?</span>
            <div className='cheadbutton'>
                <a className='sop' href="/"><img src={carrow} alt="" /> See Open Positions</a>
                <a className='lm' href="/">Learn More</a>
            </div>
        </div>
        <div className='Cslider'>
            <PhotoSlider/>
        </div>
    </div>
  )
}

export default CareerFirstPage