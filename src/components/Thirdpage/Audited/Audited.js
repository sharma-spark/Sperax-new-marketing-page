import React from 'react'
import shield from './shield.svg'
import auditlogo from './auditlogo.svg'
import mobile from "./logos.svg"
import './audit.css'

const Audited = () => {
  return (
    <div className='audit'> 
        <div className='shield'><img src={shield} alt="" /></div>
        <div className='auditpara'><p>Audited & Verified</p></div>
        <div className='audithead'><h3>The most secure protocol for money</h3></div>
        <div className='auditlogos-desktop'>
            <img src={auditlogo} alt="" />
        </div>
        <div className='auditlogos-mobile'>
            <img src={mobile} alt="" />
        </div>
        <div className='auditreports'>
            <a href="https://github.com/Sperax/Audit_Reports">View Reports</a>
        </div>
    </div>
  )
}

export default Audited