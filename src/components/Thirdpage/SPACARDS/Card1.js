import React from 'react'
import './card.css'
import burn from './burn.svg'

const Card1 = (props) => {
  return (
    <div className='card1'>
        <div className='headandimg'>
          <div><p className='headtext'>Burn</p></div>
          <div className='circles'>
            <img src={burn} alt="" />
          </div>
        </div>

      <div>
        <p className='bodytext'>Expansion of USDs will lead to burning of SPA. Rate of SPA burn is designed to increase with time.</p>
      </div>

      <div className='cardbottomtext'>
        <p className='ttext'>Total SPA Burnt</p>
        <p className='btext'>{props.burnt} SPA</p>
      </div>

    </div>
  )
}

export default Card1