import React from 'react'
import './secondpage.css'
// import {BrowserRouter} from 'react-router-dom'
import working from './working.svg'
import Board from './ValueBoard/Board.js'
import PartnerAndContact from './PartnerAndContact/PartnerAndContact.js'
import Earnwithusds from './EarnWithUsds/Earnwithusds.js'
import Spaeco from './Speraxeco/Spaeco.js'
import Supply from './Supply/Supply.js'
import "./secondpage.css";
import workingmobile from './working_mobile.svg'

const Secondpage = (props) => {
    return (
        <div className='secondpage'>
            <div className='headingmini'><span> So.. </span>how does it work ?</div>
            <div className='getbuttons'>
                <a href="https://app.sperax.io/mint">Get USDs</a>
                <a href="https://app.sperax.io/?buyToken=SPA">Get SPA</a>
            </div>
            <img className='working' src={working} alt=""/>
            <img className='workingmobile' src={workingmobile} alt="" />
            <Board apy={props.apy} totalValueLocked={props.totalValueLocked} totalApy={props.totalApy}/>
            <PartnerAndContact/>
            <Earnwithusds/>
            <Spaeco/>
            <Supply totalSupply={props.totalSupply} circulate={props.circulate}/>
        </div>
    )
}

export default Secondpage