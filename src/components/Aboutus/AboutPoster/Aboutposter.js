import React from 'react'
import './Aboutposter.css'
import slogo from './speraxlogoabout.svg'
const Aboutposter = () => {
  return (
    <div className='Aboutpostero'>
    <div className='Aboutposter'>
        <div className='innerbox'>
            <div className='inbxlogo'><img src={slogo} alt="" /></div>
            <div className='inbxtext'>
                <p>As believers of technological innovation, we mission to build a blockchain-enabled society that is equal and inclusive. To realize that, we are building a transparent, diverse and collaborative space where each opinion is heard. </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutposter