import React from 'react'
import './Brandcolor.css'

const BrandColor = () => {
  return (
    <div className='BColor'>
        <div className='BrandColor'>
        <p>Brand colors</p>
        <span>You’re encouraged to use the official colors  below when displaying the logo and marks.</span>
        </div>
        <div className='BrandColorcards'>
            <div className='fcard'>
                <div className='fcolor'></div>
                <p>Sperax Brand Color</p>
                <span>#31C1BF</span>
            </div>
            <div className='scard'>
                <div className='scolor'></div>
                <p>USDs Color</p>
                <span>#2D9CDB</span>
            </div>
            <div className='lcard'>
                <div className='lcolor'></div>
                <p>Sperax Charcoal</p>
                <span>#1B2022</span>
            </div>

        </div>
        
    </div>
  )
}

export default BrandColor