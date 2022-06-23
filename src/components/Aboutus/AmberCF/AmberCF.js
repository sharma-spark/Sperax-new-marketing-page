import React from 'react'
import './amberCF.css'
import tian from './tian.svg'
import amlogo from './ambercomplogo.svg'
import ammob from './ambermob.svg'

const AmberCF = () => {
  return (
    <>
    <div className='amber'>
        <div className='CFimage'>
            <img src={tian} alt="" />
        </div>
        <div className='CFdes'>
            <h5>Tiantian Kullander</h5>
            <span>Co-Founder at Amber Group</span>
            <p>Servicing over 800 institutional clients with $4B in assets under management. In 2021, Amber Group raised $100 million in Series B funding and became the latest FinTech unicorn valued over $1 billion. Previously, Tiantiam earned his BA from University of Durham and worked as a trader at Morgan Stanley and Goldman Sachs. Forbes 30 Under 30 recipient.</p>
            <img src={amlogo} alt="" />
        </div>
    </div>
    <div className='ambermobo'>
      <div className='ambermobi'>
        <div className='imgheadmob'><img src={ammob} alt="" /></div>
        <div className='ambertextmob'>
            <h5>Tiantian Kullander</h5>
            <span>Co-Founder at Amber Group</span>
            <p>servicing over 800 institutional clients with $4B in assets under management. In 2021, Amber Group raised $100 million in Series B funding and became the latest FinTech unicorn valued over $1 billion. Previously, Tiantiam earned his BA from University of Durham and worked as a trader at Morgan Stanley and Goldman Sachs. Forbes 30 Under 30 recipient.</p>
            <img src={amlogo} alt="" />
        </div>
      </div>

    </div>
    </>
  )
}

export default AmberCF