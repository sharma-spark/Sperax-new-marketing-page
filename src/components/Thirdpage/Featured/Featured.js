import React from 'react'
import featuredlogo from './featuredlogo.svg'
import logo from './logo.svg'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='feattext'>Featured in top tech news publishers</div>
        <div className='featlogo-desktop'><img src={featuredlogo} alt="" /></div>
        <div className='featlogo-mobile'><img src={logo} alt="" /></div>
    </div>
  )
}

export default Featured