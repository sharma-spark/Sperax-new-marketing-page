import React from 'react'
import featuredlogo from './featuredlogo.svg'
import logo from './logo.svg'
import './featured.css'
import yahoo from './featimages/yahoo.svg'
import messari from './featimages/messari.svg'
import coindesk from './featimages/coindesk.svg'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='feattext'>Featured in top tech news publishers</div>
        <div className='featlogo-desktop'>
          {/* <img src={featuredlogo} alt="" /> */}
          <a className='featlink'  href="https://www.coindesk.com/business/2021/12/29/aoki-alameda-back-algorithmic-stablecoin-on-arbitrum-at-200m-valuation/"> <img src={coindesk} alt="" /></a>
          <a className='featlink'  href="https://finance.yahoo.com/news/investment-platform-streetbeat-partners-sperax-142000287.html"> <img src={yahoo} alt="" /> </a>
          <a className='featlink'  href="https://messari.io/article/sperax-usd-a-hybrid-stablecoin-with-a-twist"> <img src={messari} alt="" /></a>
        </div>
        <div className='featlogo-mobile'><img src={logo} alt="" /></div>
    </div>
  )
}

export default Featured