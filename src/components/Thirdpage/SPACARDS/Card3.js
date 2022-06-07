import React from 'react'
import './card.css'
import buyback from './buyback.svg'
import './card3.css'

const Card3 = (props) => {
  return (
    <div className='card3'>
        <div className='headandimg'>
          <div><p className='headtext'>Buyback</p></div>
          <div className='circles'>
            <img src={buyback} alt="" />
          </div>
        </div>

      <div>
        <p className='bodytext'>SPA is bought on the open market using protocol fees and yield generated from USDs. This maintains constant buying pressure for SPA</p>
      </div>

      <div className='cardbottomtext'>
        <p className='ttext'>Total Buyback</p>
        <p className='btext'>{props.buyBack} SPA</p>
      </div>

    </div>
  )
}

export default Card3