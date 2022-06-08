import React from 'react'
import arrow1 from './arrow1.svg'
import telegramwhite from './telegram_white.svg'
import './scard2.css'

const Scard2 = () => {
  return (
    <div className='scard2'>
        <div className='slogo'><img src={telegramwhite} alt="" /></div>
        <div className='scount'><h2>29,765</h2></div>
    </div>
  )
}

export default Scard2