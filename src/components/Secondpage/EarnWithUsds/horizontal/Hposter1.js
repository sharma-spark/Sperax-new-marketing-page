import React, {useState} from 'react'
import './hposter1.css'
import arrow from './arrow.svg'
import hposter1img from './hposter1img.svg'
import Modal from "../../../Modal/Modal";
const Hposter1 = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='postercard'>
        <div className='headtext1'>
            <h3>HOLD USDs</h3>
            <p>Earn up to 11% APY in auto-yield on the USDs held in your wallet</p>
        </div>
        <div className='alinks'>
            <a onClick={() => setShow(true)}><span className='at'>Buy USDs </span>  <img src={arrow} alt="" /></a>
            <a href="https://app.sperax.io/mint"><span className='at'>Mint USDs </span> <img src={arrow} alt="" /></a>
        </div>
        <div className='postimg'>
            <img src={hposter1img} alt="" />
        </div>
        <Modal show={show} onHide={() => setShow(false)} type={'USDS'} />
    </div>
  )
}

export default Hposter1