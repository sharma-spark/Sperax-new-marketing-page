import React from 'react'
import download from './downloadlogo.svg'
import bigsperax from './bigsperaxlogo.svg'
import './firstposter.css'
import BrandAsset from './Brand Assets.zip'
const Firstposter = () => {
  return (
    <div className='firstposter'>
        <div className='brandkithead'>
            <p className='bhead'>Sperax Brand Kit</p>
            <p>You’re encouraged to use the official colors when displaying the logo and marks. When using the logo type on light backgrounds, use our charcoal color when possible. Use white if displaying on dark backgrounds (as in the sperax.com header).</p>
            <a className='dwnbrandkit' download="Brand Asset" href={BrandAsset}>Download entire kit <img src={download} alt="" /> </a> 
            <span className='det'>>> It contains Sperax USD, SPA token & Company assets</span>
        </div>
        <div className='bspa' >
            <img src={bigsperax} alt="" />
        </div>
    </div>
  )
}

export default Firstposter