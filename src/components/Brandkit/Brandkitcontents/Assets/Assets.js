import React from 'react'
import './Assets.css'
import spasset from './spelogo.png'
import usdsasset from './usdslogoasset.svg'
import Spatoken from './SPA Token.zip'
import SperaxUSD from './Sperax USD.zip'
const Assets = () => {
  return (
    <div className='Asset'>
        <div className='Assethead'>
            <p>Sperax Brand Assets</p>
            <span>We’ve provided vector versions of our logo and mark for SPA token and USDs Stablecoin</span>
        </div>
        <div className='Assetheadmob'>
            <p>Sperax Brand Assets</p>
            <span>We’ve provided vector versions of our logo and mark for SPA token and USDs Stablecoin</span>
        </div>

        <div className='dwldassets'>
            <div className='brkLCard'>
              <img src={spasset} alt="" />
              <p>Download Sperax Brand Assets</p>
              <span>SVG / PNG </span>
              <a download="SPA Tokens" href={Spatoken}>Download </a>
            </div>
            <div className='brkRCard'>
              <img src={usdsasset} alt="" />
              <p>Download USDs Brand Assets</p>
              <span>SVG / PNG </span>
              <a download="Sperax USD" href={SperaxUSD}>Download </a>
            </div>
        </div>
    </div>
  )
}

export default Assets