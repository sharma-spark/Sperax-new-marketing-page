import React, {useState} from 'react'
import './spaeco.css'
import Modal from "../../Modal/Modal";

const Spaeco = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='getspadisc'>
        <div className='SPAtext'>
            <span>SPA is the value accrual and governance token for the<span className='in'> Sperax ecosystem </span></span>
        </div>
        <div className='getspa'>
            <a className="darkBtn" href='https://global.transak.com/?apiKey=6f11a8a6-81e6-4639-915c-13bac6fba229&cryptoCurrencyList=USDS,ETH,USDC,SPA&defaultNetwork=arbitrum&networks=ethereum,arbitrum&defaultCryptoCurrency=SPA'>Get SPA →</a>
        </div>
        {/* <Modal show={show} onHide={() => setShow(false)} type={'SPA'} /> */}
    </div>
  )
}

export default Spaeco