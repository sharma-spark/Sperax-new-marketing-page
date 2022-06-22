import React from 'react'
import './Brandcolor.css'

const BrandColor = () => {
  return (
    <div className='BColor'>
        <div className='BrandColor'>
        <p>Brand colors</p>
        <span>You’re encouraged to use the official colors when displaying the logo and marks. When using the logo type on light backgrounds, use our charcoal color when possible. Use white if displaying on dark backgrounds (as in the sperax.com header).</span>
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
        </div>
        
    </div>
  )
}

export default BrandColor