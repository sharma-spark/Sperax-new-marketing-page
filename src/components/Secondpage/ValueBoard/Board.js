import React from 'react'
import './board.css'

const Board = (props) => {
  return (
    <div className='board'>
        <div className='dn'>
          <div className='boardhead'><h3>{props.apy}%</h3></div>
          <div className='boarddesp'><p>Latest Auto Yield APY</p></div>
        </div>
        <div className='dn'>
          <div className='boardhead'><h3>${props.totalValueLocked}</h3></div>
          <div className='boarddesp'><p>Total Value locked</p></div>
        </div>
        <div className='dn'>
          <div className='boardhead'><h3>{props.totalApy}%</h3></div>
          <div className='boarddesp'><p>Max. Staking APY</p></div>
        </div>
    </div>
  )
}

export default Board