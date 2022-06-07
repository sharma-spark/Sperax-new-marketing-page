import React from 'react'
import './card.css'
import lock from './lock.svg'
import './card2.css'

const Card2 = (props) => {
  return (
    <div className='card2'>
        <div className='headandimg'>
          <div><p className='headtext'>Lock</p></div>
          <div className='circles'>
            <img src={lock} alt="" />
          </div>
        </div>

      <div>
        <p className='bodytext'>Locking SPA tokens (via veSPA) is manadatory to receive protocol rewards and to participate in Sperax governance.</p>
      </div>

      <div className='cardbottomtext'>
        <p className='ttext'>Total SPA Locked </p>
        <p className='btext'>{props.locked} SPA</p>
      </div>

    </div>
  )
}

export default Card2