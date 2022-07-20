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
        <div className="sperax-desktop">
            <div className='splogotext'>
                <img src={speraxlogo} alt="" />
                <p>Sperax</p>
            </div>
            <div className='footersocial'>
                <a href="https://discord.gg/sperax" ><img src={bdiscord} alt="" /></a>
                <a href="https://t.me/SperaxUSD"><img  src={btelegram} alt="" /></a>
                <a href="https://twitter.com/speraxusd"><img src={btwitter} alt="" /></a>
                <a href="https://medium.com/sperax"><img src={bmedium} alt="" /></a>
            </div>
            <div className='rights'>
                <p>Sperax Foundation © Sperax 2020. All rights reserved.</p>
            </div>
        </div>

        <div className='footerlinks'>
            <div className={'links_group'}>
                <p className='foottitle'>Governance</p>
                <a className='linktextNo' href="https://forum.sperax.io/" target={`_blank`}><p>Forum</p></a>
                <a className="linktextNo" href="https://snapshot.org/#/speraxdao.eth" target={`_blank`}><p>Snapshot</p></a>
            </div>
            <div className={'links_group'}>
                <p className='foottitle'>Resources</p>
                <a className='linktextNo' href="https://github.com/Sperax/USDs-Whitepaper/blob/main/USDs_Whitepaper.pdf"
                   target={`_blank`}> <p>Whitepaper</p></a>
                <a className='linktextNo' href="./brandkit"><p>Brandkit</p></a>
                <a className="linktextNo" href="https://docs.sperax.io/" target={`_blank`}><p>Docs</p></a>
            </div>
        </div>

        <div className='footerlinks'>
            <div className={'links_group'}>
                <p className='foottitle'>Terms and Conditions</p>
                <p><a className='linktextNo' href="https://app.sperax.io/termsService">Terms of use</a></p>
                <p><a className='linktextNo' href="https://app.sperax.io/privacyPolicy">Privacy Policy</a></p>
            </div>
            <div className={'links_group'}>
                <p className='foottitle'>Developers</p>
                <a className='linktextNo' href="https://github.com/Sperax" target={`_blank`}><p>Github</p></a>
            </div>
            <div className={'links_group'}>
                <p className='foottitle'>Contact Us</p>
                <a className="linktextNo" href="mailto:contact@sperax.io" rel="nofollow">contact@sperax.io</a>
            </div>
        </div>
        <div className="sperax-mobile">
            <div className='splogotext'>
                <img src={speraxlogo} alt="" />
                <p>Sperax</p>
            </div>
            <div className='footersocial'>
                <a href="https://discord.gg/sperax" ><img src={bdiscord} alt="" /></a>
                <a href="https://t.me/SperaxUSD"><img  src={btelegram} alt="" /></a>
                <a href="https://twitter.com/speraxusd"><img src={btwitter} alt="" /></a>
                <a href="https://medium.com/sperax"><img src={bmedium} alt="" /></a>
            </div>
            <div className='rights'>
                <p>Sperax Foundation © Sperax 2020. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer