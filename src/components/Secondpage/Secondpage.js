import React, {useState} from 'react'
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
import Modal from "../Modal/Modal";

const Secondpage = (props) => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState();
    return (
        <div className='secondpageo'>
        <div className='secondpage'>
            <div className='headingmini'><span> So.. </span>how does it work ?</div>
            <div className='getbuttons'>
                <a href="https://app.sperax.io/mint" className="darkBtn">Get USDs</a>
                <a onClick={() => {setType('SPA');setShow(true)}} className="darkBtn">Get SPA</a>
            </div>
            <img className='working' src={working} alt=""/>
            <img className='workingmobile' src={workingmobile} alt="" />
            <Board apy={props.apy} totalValueLocked={props.totalValueLocked} totalApy={props.totalApy}/>
            <PartnerAndContact/>
            <Earnwithusds/>
            <Spaeco/>
            <Supply totalSupply={props.totalSupply} circulate={props.circulate}/>
            <Modal show={show} onHide={() => setShow(false)} type={type} />
        </div>
        </div>
    )
}

export default Secondpage