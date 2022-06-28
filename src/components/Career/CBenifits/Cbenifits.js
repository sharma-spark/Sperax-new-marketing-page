import React from 'react'
import CLTcard from './Cbenifitcards/CLTcard.js'
import CRTcard from './Cbenifitcards/CRTcard.js'
import CLBcard from './Cbenifitcards/CLBcard.js'
import CRBcard from './Cbenifitcards/CRBcard.js'
import arrowC from '../CareerFirstPage/Carrow.svg'
import './Cbenifiits.css'

const Cbenifits = () => {
  return (
    <div className='cb'>
        <div className='Cbtop'>
            <CLTcard/>
            <CRTcard/>
        </div>
        <div className='Cbbottom'>
            <CLBcard/>
            <CRBcard/>
        </div>
        <div className='sed'><a className='seeopens' href="https://jobs.lever.co/sperax/"><img src={arrowC} alt="" /> See Open Positions</a></div>
        <div className='buttonformobile'>
         <a href="https://jobs.lever.co/sperax/"><img src={arrowC} alt="" /> See Open Positions</a>
        </div>

    </div>
  )
}

export default Cbenifits