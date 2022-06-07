import React from 'react'
import './hposter1.css'
import arrow from './arrow.svg'
import hposter1img from './hposter1img.svg'
const Hposter1 = () => {
  return (
    <div className='postercard'>
        <div className='headtext1'>
            <h3>HOLD USDs</h3>
            <p>Earn up to 11% APY in auto-yield on the USDs held in your wallet</p>
        </div>
        <div className='alinks'>
            <a href="/"><span className='at'>Buy USDs </span>  <img src={arrow} alt="" /></a>
            <a href="/"><span className='at'>Mint USDs </span> <img src={arrow} alt="" /></a>
        </div>
        <div className='postimg'>
            <img src={hposter1img} alt="" />
        </div>
    </div>
  )
}

export default Hposter1