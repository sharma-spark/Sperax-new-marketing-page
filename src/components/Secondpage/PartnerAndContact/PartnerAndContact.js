import React from 'react'
import './Partner.css'
import Promotion1 from './Promotion1.js'
import Promotion2 from './Promotion2.js'
import Promotion3 from './Promotion3.js'

const PartnerAndContact = () => {
  return (
    <div className='partnerandcontact'>
        <div className='partner'>
            <h3>Partner with us</h3>
            <div className='contact'>
            <a className="darkBtn" href="https://docs.google.com/forms/d/e/1FAIpQLSecB5J44sq87cCy9babIu81uzINYpW2BS3_Cl3uM5CmRM7sdQ/viewform" rel="nofollow">Contact Us</a>
            </div>
        </div>
        <Promotion1/>
        <Promotion2/>
        <Promotion3/>
        <div className='partner'>
            <div></div>
            <div className='contact'>
                <a className="darkBtn" href="https://docs.google.com/forms/d/e/1FAIpQLSecB5J44sq87cCy9babIu81uzINYpW2BS3_Cl3uM5CmRM7sdQ/viewform" rel="nofollow">Contact Us</a>
            </div>
        </div>

    </div>
  )
}

export default PartnerAndContact