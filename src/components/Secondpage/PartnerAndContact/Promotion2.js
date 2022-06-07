import React from 'react'
import './promotion2.css'
import p2img from './promotion2img.svg'

const Promotion2 = () => {
  return (
    <div className='p2'>
        <div className='textarea'>
            <span className='num'>02</span>
            <h3 className='head'>Ideal Stable Asset for Centralized Exchanges</h3>
            <p className='body'>Increase profits by earning auto-yield generated on all the USDs held by your end users</p>
        </div>
        <div className='imagearea2'>
            <img src={p2img} alt="" />
        </div>
    </div>
  )
}

export default Promotion2