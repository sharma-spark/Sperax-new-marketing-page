import React from 'react'
import './leftspecs.css'
import video from './video.svg'
const Leftspecs = () => {
  return (
    <div className='specscard'>
        <div className='specslogo'><img src={video} alt="" /></div>
        <div>
            <div className='specsheading'><p>Motivated team</p></div>
            <div className='specsbodyl'><span>Our team believes in enabling financial decentralization and have faith in our value and culture.  This close knit group works from across the world towards one common goal.</span></div>
        </div>
    </div>
  )
}

export default Leftspecs