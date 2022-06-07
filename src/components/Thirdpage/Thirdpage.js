import React from 'react'
import './Thirdpage.css'
import SPAcards from './SPACARDS/Spacards.js'
import Spartan from './Spartan/Spartan.js' 
import Socialcards from './Social_cards/SocialCards.js'
import Audited from './Audited/Audited.js'
import Featured from './Featured/Featured.js'
import Footer from './Footer/Footer.js'
import background from "./background.svg"

const Thirdpage = (props) => {
  return (
    <div className='Thirdpage'>
        <img className="background-img" src={background}/>
        <SPAcards burnt={props.burnt} locked={props.locked} buyBack={props.buyBack}/>
        <Spartan/>
        <div className='joinspadiv'><h1 className='joinspa'><b> Join the SPArtan army!!</b></h1></div>
        <Socialcards/>
        <Audited/>
        <Featured/>
        <Footer/>
    </div>
  )
}

export default Thirdpage