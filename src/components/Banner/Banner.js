import React from "react";
import "./banner.css";
import discord from "../Navbar/discord.svg";
import telegram from "../Navbar/telegram.svg";
import twitter from "../Navbar/twitter.svg";
import medium from "../Navbar/medium.svg";
const Banner = () => {
    return <React.Fragment>
        <div className="banner">
            <div className="bannerContent">
                <div className="jonClass">
                    <h3>Join the community</h3>
                </div>
                <div className='social'>
                    <a href="https://discord.com/invite/sperax"><img className='icon' src={discord} alt="discord" /></a>
                    <a href="https://t.me/SperaxUSD"><img className='icon' src={telegram} alt="telegram" /></a>
                    <a href="https://twitter.com/SperaxUSD"><img className='icon' src={twitter} alt="twitter" /></a>
                    <a href="https://medium.com/sperax"><img className='icon' src={medium} alt="medium" /></a>
                </div>
                <span className="sub-text">Subscribe to our newsletter</span>
                <form role="grid"
                      action="https://sperax.us19.list-manage.com/subscribe/post?u=5b6783fe1337881c06a14dd4d&amp;id=15b8a3b990"
                      method="post" target="_blank" className="next-form next-inline next-medium f_r_b">
                    <div className="inputContainer">
                        <input id="EMAIL" placeholder="enter email" name="EMAIL"/>
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
}
export default Banner