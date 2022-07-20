import React from 'react'
import arrow from '../horizontal/arrow.svg'
import './bigposter.css'
// import bigimg from './bigposterimg.svg'
import bigab from './bigabove.svg'
import bigbel from './bigbelow.svg'
const Bigposter = () => {
  return (
    <div className='big'>
        <div className='lefttext'>
            <div className='headb'>
                <h3>Stake SPA</h3>
                
            </div>
            <div className='bodyb'>
                <p>Stake SPA to receive protocol fees, share of USDs auto-yield and staking incentives.</p>
                <p>The longer you stake, higher your reward and voting power</p>
            </div>
            <div className='alinksb'>
                <a href="https://app.sperax.io/stake"><span className='at'>Stake SPA </span> <img src={arrow} alt="" /></a>
                <a href="https://docs.sperax.io/staking-protocol"><span className='at'>Learn More </span> <img src={arrow} alt="" /></a>
            </div>
        </div>
        <div className='rightimg'>
        <div style={{height: '100%', width: '100%', position: 'relative'}}>
        <img className='bel' src={bigbel} alt="" />
        <img className='abo' src={bigab} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Bigposter