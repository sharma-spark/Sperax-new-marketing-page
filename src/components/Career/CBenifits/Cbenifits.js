import React from 'react'
import CLTcard from './Cbenifitcards/CLTcard.js'
import CRTcard from './Cbenifitcards/CRTcard.js'
import CLBcard from './Cbenifitcards/CLBcard.js'
import CRBcard from './Cbenifitcards/CRBcard.js'
import arrowC from '../CareerFirstPage/Carrow.svg'
import './Cbenifiits.css'

const Cbenifits = () => {
  return (
    <div>
        <div className='Cbtop'>
            <CLTcard/>
            <CRTcard/>
        </div>
        <div className='Cbbottom'>
            <CLBcard/>
            <CRBcard/>
        </div>
        <a className='seeopens' href="/"><img src={arrowC} alt="" /> See Open Positions</a>

    </div>
  )
}

export default Cbenifits