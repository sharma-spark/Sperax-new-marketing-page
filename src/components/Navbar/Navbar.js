import React, {useState} from 'react'
import './Navbar.css'
import logo from './SperaxLogo.svg'
import hiring from './wearehiring.svg'
import discord from './discord.svg'
import medium from './medium.svg'
import twitter from './twitter.svg'
import telegram from './telegram.svg'
import menu from './menu.svg'
import close from './close.svg'
import {Link} from "react-router-dom"


const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
      
    <div className='Navbar'>

        <div className='leftPart'>
            <a className='speraxlogo' href="/"><img src={logo} alt="" /></a>
            <div className='textlinks'>
            <a className='linktextspa' href="/">Sperax</a>
            <a className='linktext' href="https://docs.sperax.io/">Docs</a>
            <a className='linktext' href="./about">About Us</a>
            <a style={{position: 'relative'}} className='linktext' href="./careers">Careers <img style={{position: 'absolute', bottom: '15px'}} src={hiring} alt="we are hiring" /></a>
            </div>
        </div>

        <div className='rightPart deskTopRight'>
        
            <div className='social'>
                <a href="https://discord.com/invite/sperax"><img className='icon' src={discord} alt="discord" /></a>
                <a href="https://t.me/SperaxUSD"><img className='icon' src={telegram} alt="telegram" /></a>
                <a href="https://twitter.com/SperaxUSD"><img className='icon' src={twitter} alt="twitter" /></a>
                <a href="https://medium.com/sperax"><img className='icon' src={medium} alt="medium" /></a>
            </div>
            
            <a className='darkBtn app' href="https://app.sperax.io/">Launch app →</a>
        </div>

        <div className='rightPart mobileRight'>

            <div className='social'>
                <a href="https://discord.com/invite/sperax"><img className='icon' src={discord} alt="discord" /></a>
                <a href="https://t.me/SperaxUSD"><img className='icon' src={telegram} alt="telegram" /></a>
                <a href="https://twitter.com/SperaxUSD"><img className='icon' src={twitter} alt="twitter" /></a>
                <a href="https://medium.com/sperax"><img className='icon' src={medium} alt="medium" /></a>
            </div>

            <a className='darkBtn app' href="https://app.sperax.io/">Launch app →</a>
            <div className="mobileMenu" >
                <img onClick={() => setShow(!show)} src={show ? close : menu}/>
                {show && <div className="mobileMenuContainer">
                    <a href="https://docs.sperax.io/">Docs</a>
                    <a href="./about">About Us</a>
                    <a style={{position: 'relative'}} href="./careers">Careers <img src={hiring} alt="we are hiring" /></a>
                </div>}
            </div>
        </div>

    </div>
  )
}

export default Navbar