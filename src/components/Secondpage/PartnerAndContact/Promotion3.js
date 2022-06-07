import React from 'react'
import './promotion3.css'
import p31 from './promotion3image/promotion3image11.svg'
import p32 from './promotion3image/promotion3image12.svg'
import p33 from './promotion3image/promotion3image13.svg'
import p34 from './promotion3image/promotion3image14.svg'

const Promotion3 = () => {
  return (
    <div className='p3'>
        <div className='textarea'>
            <span className='num'>03</span>
            <h3 className='head'>Idle Cash Management for Market Makers and Hedge Funds</h3>
            <p className='body'>Park your surplus stable reserves in USDs to earn a healthy organic yield</p>
        </div>
        <div className='imagearea3'>
            <img src={p31} alt="" />
            <img src={p32} alt="" />
            <img src={p33} alt="" />
            <img src={p34} alt="" />
        </div>

    </div>
  )
}

export default Promotion3