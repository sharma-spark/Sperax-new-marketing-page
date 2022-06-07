import React from 'react'
import featuredlogo from './featuredlogo.svg'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='feattext'>Featured in top tech news publishers</div>
        <div className='featlogo'><img src={featuredlogo} alt="" /></div>
    </div>
  )
}

export default Featured