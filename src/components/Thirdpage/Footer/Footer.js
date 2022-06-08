import React from 'react'
import btwitter from './twitter_black.svg'
import bdiscord from './discord_black.svg'
import btelegram from './telegram_black.svg'
import bmedium from './medium_black.svg'
import speraxlogo from '../../Navbar/SperaxLogo.svg'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <div className='splogotext'>
                <img src={speraxlogo} alt="" />
                <p>Sperax</p>
            </div>
            <div className='footersocial'>
                <img src={bdiscord} alt="" />
                <img src={btelegram} alt="" />
                <img src={btwitter} alt="" />
                <img src={bmedium} alt="" />
            </div>
            <div className='rights'>
                <p>Sperax Foundation © Sperax 2020. All rights reserved.</p>
            </div>
        </div>

        <div className='footerlinks'>
            <div>
                <p className='foottitle'>Resources</p>
                <p>Whitepaper</p>
                <p>Brandkit</p>
                <p>Docs</p>
            </div>
            <div>
                <p className='foottitle'>Developers</p>
                <p>Github</p>
            </div>
        </div>

        <div className='footerlinks'>
            <div>
                <p className='foottitle'>Terms and Conditions</p>
                <p>Terms of use</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <p className='foottitle'>Contact Us</p>
                <a href="mailto:alec@sperax.io;contact@sperax.io;gerry@sperax.io" rel="nofollow">contact@sperax.io</a>
            </div>
        </div>
    </div>
  )
}

export default Footer