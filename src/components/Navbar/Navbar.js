import React from 'react'
import './Navbar.css'
import logo from './SperaxLogo.svg'
import hiring from './wearehiring.svg'
import discord from './discord.svg'
import medium from './medium.svg'
import twitter from './twitter.svg'
import telegram from './telegram.svg'
import menu from './menu.svg'


const Navbar = () => {
  return (
      
    <div className='Navbar'>

        <div className='leftPart'>
            <a className='speraxlogo' href="/"><img src={logo} alt="" /></a>
            <div className='textlinks'>
            <a className='linktextspa' href="/">Sperax</a>
            <a className='linktext' href="https://docs.sperax.io/">Docs</a>
            <a className='linktext' href="https://sperax.io/team">About Us</a>
            <a className='linktext' href="https://sperax.io/careers">Career <img src={hiring} alt="we are hiring" /></a>
            </div>
        </div>

        <div className='rightPart deskTopRight'>
        
            <div className='social'>
                <a href="https://discord.com/invite/sperax"><img className='icon' src={discord} alt="discord" /></a>
                <a href="https://t.me/SperaxUSD"><img className='icon' src={telegram} alt="telegram" /></a>
                <a href="https://twitter.com/SperaxUSD"><img className='icon' src={twitter} alt="twitter" /></a>
                <a href="https://medium.com/sperax"><img className='icon' src={medium} alt="medium" /></a>
            </div>
            
            <a className='app' href="https://app.sperax.io/">Launch app →</a>
        </div>

        <div className='rightPart mobileRight'>

            <div className='social'>
                <a href="https://discord.com/invite/sperax"><img className='icon' src={discord} alt="discord" /></a>
                <a href="https://t.me/SperaxUSD"><img className='icon' src={telegram} alt="telegram" /></a>
                <a href="https://twitter.com/SperaxUSD"><img className='icon' src={twitter} alt="twitter" /></a>
                <a href="https://medium.com/sperax"><img className='icon' src={medium} alt="medium" /></a>
            </div>

            <a className='app' href="https://app.sperax.io/">Launch app →</a>
            <div className="mobileMenu" >
                <img src={menu}/>
            </div>
        </div>

    </div>
  )
}

export default Navbar