import React from 'react'

import vid from './Cvidlogo.svg'
import './CLTcard.css'
const CLTcard = () => {
  return (
    <div className='bpcard'>
        <div className='limg'><img src={vid} alt="" /></div>
        <div className='rtext'>
            <p>Community</p>
            <span>We aim for connection beyond our work with a fun hour on Zoom each week, since teams that care for each other work better together. Success at Sperax means working fast and fun with a driven team on a mission to build the world’s most attractive stablecoin.</span>
        </div>
    </div>
  )
}

export default CLTcard