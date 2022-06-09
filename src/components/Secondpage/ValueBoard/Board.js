import React from 'react'
import './board.css'

const Board = (props) => {
  return (
    <div className='board'>
        <div className='dn'>
          <div className='boardhead'><h3>{props.apy? `${props.apy}%`: ''}</h3></div>
          <div className='boarddesp'><p>USDs Auto-yield APY</p></div>
        </div>
        <div className='dn'>
          <div className='boardhead'><h3>{props.totalValueLocked ? `$${props.totalValueLocked}`: ''}</h3></div>
          <div className='boarddesp'><p>Total Value locked</p></div>
        </div>
        <div className='dn'>
          <div className='boardhead'><h3>{props.totalApy ? `${props.totalApy}%`: '0'}</h3></div>
          <div className='boarddesp'><p>Max SPA staking APY</p></div>
        </div>
    </div>
  )
}

export default Board