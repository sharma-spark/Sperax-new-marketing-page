import React from 'react'
import arrow1 from './arrow1.svg'
import twitterwhite from './twitter_white.svg'
import './scard3.css'

const Scard3 = () => {
  return (
    <div className='scard3'>
        <div className='fore3'></div>
        <div className='arrowpoint'><img src={arrow1} alt="" /></div>
        <div className='slogo'><img src={twitterwhite} alt="" /></div>
        <div className='scount'><h2>33,757</h2></div>
    </div>
  )
}

export default Scard3