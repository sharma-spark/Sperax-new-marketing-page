import React from 'react'
import Card1 from './Card1.js'
import Card2 from './Card2.js'
import Card3 from './Card3.js'
import './SPAcards.css'
const Spacards = (props) => {
  return (
    <div className='SPAcards'>
        <Card1 burnt={props.burnt}/>
        <Card2 locked={props.locked}/>
        <Card3 buyBack={props.buyBack}/>
    </div>
  )
}

export default Spacards