import React from 'react'
import './leftspecs.css'
import video from './video.svg'
const Leftspecs = () => {
  return (
    <div className='specscard'>
        <div className='specslogo'><img src={video} alt="" /></div>
        <div>
            <div className='specsheading'><p>Motivated team</p></div>
            <div className='specsbodyl'><span>Our work with a fun hour on Zoom each week, since teams that care for each other work better together n with a driven team on a mission to build the world’s most attractive stablecoin. Success at Sperax means working fast and fun with a driven team on a mission to build the world’s most attractive stablecoin </span></div>
        </div>
    </div>
  )
}

export default Leftspecs