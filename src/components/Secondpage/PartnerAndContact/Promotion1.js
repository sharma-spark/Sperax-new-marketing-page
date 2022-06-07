import React from 'react'
import p1img from './promotion1img.svg'
import './promotion1.css'

const Promotion1 = () => {
  return (
    <div className='p1'>
        <div className='textarea'>
            <span className='num'>01</span>
            <h3 className='head'>Perfect portfolio mix for Neobanks, Trading and Asset management apps</h3>
            <p className='body'>Integrate with USDs to pass on our stable organic yield to your end users</p>
        </div>
        <div className='imagearea'>
            <img src={p1img} alt="" />
        </div>
    </div>
  )
}

export default Promotion1