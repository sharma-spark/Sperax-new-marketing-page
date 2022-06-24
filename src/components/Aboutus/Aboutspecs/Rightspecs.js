import React from 'react'
import dollar from './dollar.svg'
import './rightspecs.css'

const Rightspecs = () => {
  return (
    <div className='specscard'>
        <div className='specslogo'><img src={dollar} alt="" /></div>
        <div>
            <div className='specsheading'><p>Skillful people</p></div>
            <div className='specsbodyr'><span>Our team consists of purpose-driven engineers, economists, mathematicians, marketing specialists and designers with  years of experience in blockchain space.</span></div>
        </div>
    </div>
  )
}

export default Rightspecs