import React from 'react'
import arrow1 from './arrow1.svg'
import twitterwhite from './twitter_white.svg'
import './scard3.css'

const Scard3 = (twittercount) => {
  console.log(twittercount.twittercount)
  return (
    
    <div className='scard3'>
        <div className='slogo'><img src={twitterwhite} alt="" /></div>
        <div className='scount'><h2>{(twittercount.twittercount).toLocaleString()}</h2></div>
    </div>
  )
}

export default Scard3