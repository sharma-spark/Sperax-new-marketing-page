import React from 'react'
import arrow1 from './arrow1.svg'
import discordwhite from './discord_white.svg'
import './scard1.css'

const Scard1 = () => {
  return (
    <div className='scard1'>
        <div className='slogo'><img src={discordwhite} alt="" /></div>
        <div className='scount'><h2>2,065</h2></div>
    </div>
  )
}

export default Scard1