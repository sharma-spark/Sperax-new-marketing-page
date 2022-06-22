import React from 'react'
import './leftspecs.css'
import video from './video.svg'
const Leftspecs = () => {
  return (
    <div className='specscard'>
        <div className='specslogo'><img src={video} alt="" /></div>
        <div>
            <div className='specsheading'><p>Motivated team</p></div>
            <div className='specsbodyl'><span>Our team consists of purpose-driven engineers, mathematicians, marketing specialists and designers that have faith in our value and culture.  </span></div>
        </div>
    </div>
  )
}

export default Leftspecs