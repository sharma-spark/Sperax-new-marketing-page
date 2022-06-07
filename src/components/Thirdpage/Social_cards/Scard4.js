import React from 'react'
import arrow1 from './arrow1.svg'
import mediumwhite from './medium_white.svg'
import './scard4.css'

const Scard4 = () => {
  return (
    <div className='scard4'>
        <div className='fore4'></div>
        <div className='arrowpoint'><img src={arrow1} alt="" /></div>
        <div className='slogo'><img src={mediumwhite} alt="" /></div>
        <div className='scount'><h2>1,633</h2></div>
    </div>
  )
}

export default Scard4