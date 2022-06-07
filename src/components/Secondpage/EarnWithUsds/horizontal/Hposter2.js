import React from 'react'
import './hposter2.css'
import arrow from './arrow.svg'
import hposter2img from './hposter2img.svg'
import hposterover from './hposter2overimg.svg'
const Hposter2 = () => {
  return (
    <div className='postercard2'>
        <div className='headtext2'>
            <h3>Farm</h3>
            <p>Provide liquidity in our designated pools, stake your liquidity pool tokens in our unique Uniswap v3 and Saddle farms to earn massive rewards</p>
        </div>
        <div className='alinks2'>
            <a href="https://app.sperax.io/farm"> <span className='at'>Earn through Farms </span><img src={arrow} alt="" /></a>
            <a href="https://docs.sperax.io/liquidity-mining"><span className='at'>Learn more</span><img src={arrow} alt="" /></a>
        </div>
        <div className='postimg2'>
            <img className='below' src={hposter2img} alt="" />
            <img className='above' src={hposterover} alt="" />
        </div>
    </div>
  )
}

export default Hposter2