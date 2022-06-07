import React from 'react'
import './investors.css'
import polychain from './polychain.svg'
import jump from './jumptrading.svg'
import alameda from './alameda.svg'
import amber from './amber.svg'
import outlier from './outlier.svg'
import steve from './steve.svg'

const Investors = () => {
  return (
      <div className="investors-container">
          <div className='investors'>
              <div>
                  <span className='text'>Backed by</span>
              </div>
              <div><img src={polychain} alt="" /></div>
              <div><img src={jump} alt="" /></div>
              <div><img src={alameda} alt="" /></div>
              <div><img src={amber} alt="" /></div>
              <div><img src={outlier} alt="" /></div>
              <div><img src={steve} alt="" /></div>

          </div>
      </div>
  )
}

export default Investors