import React from 'react'
import arrow1 from './arrow1.svg'
import telegramwhite from './telegram_white.svg'
import './scard2.css'

const Scard2 = (telegramcount) => {
  return (
    <div className='scard2'>
        <div className='slogo'><img src={telegramwhite} alt="" /></div>
        <div className='scount'><h2>{(telegramcount.telegramcount).toLocaleString()}</h2></div>
    </div>
  )
}

export default Scard2