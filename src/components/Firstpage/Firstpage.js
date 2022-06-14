import React, {useState} from 'react'
import './Firstpage.css'
import topright from './imagetopright.svg'
import bottomright from './imagebottomright.svg'
import gas from './gascost.svg'
import compound from './compounding.svg'
import oyield from './yield.svg'
import Modal from "../Modal/Modal";

const Firstpage = () => {
  return (
      <div>
        <div className='text'>
            <div className='heading'>Stablecoin with built-in Auto-Yield on Arbitrum</div>
            <div className='detail'>Sperax USD (USDs) is primarily backed by crypto collateral which generates organic yield for it’s holders. The protocol is aggressively working towards decentralization in the near future.
            </div>
            <a  className='getusds darkBtn' href="https://app.sperax.io/mint">Get USDs →</a>
        </div>

        <div className='images'>
            <img className='top' src={topright} alt="" />
            <img className='bottom' src={bottomright} alt="" />
        </div>

          <a className='getusdsMobile' href="https://app.sperax.io/mint">Get USDs →</a>
        
        <div className='features'>
            <div className='yield'>
              <div className='heading1'>
                <img src={oyield} alt="" />
                <p>Organic Yield</p>
              </div>
              <span>Earn market driven organic yield ~ 11% APY*</span>
            </div>
            <div className='gas'>
              <div className='heading2'>
                <img src={gas} alt="" />
                <p>No Gas Costs</p>
              </div>
              <span>Save gas spent on claiming and re-investing yield</span>
            </div>
            <div className='compound'>
              <div className='heading3'>
                 <img src={compound} alt="" />
                 <p>Auto Compounding </p>
              </div>
              <span>Earn hassle free yield on your crypto assets </span>
            </div>
            </div>
            <div className='learnmore'>
            <span >*11% APY is the maximum organic auto-yield, any additional yield generated gets stored in the yield reserves and will be used for funding yields in future. <a style={{color: '#707E85'}} className='linktextNo' href="https://docs.sperax.io/master/auto-yield">Learn more.</a> </span>
            </div>
      </div>
  )
}

export default Firstpage