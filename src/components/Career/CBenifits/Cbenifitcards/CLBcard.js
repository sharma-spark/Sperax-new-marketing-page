import React from 'react'
import gol from './Cglobal.svg'
import './CLTcard.css'
const CLTcard = () => {
  return (
    <div className='bpcard'>
        <div className='limg'><img src={gol} alt="" /></div>
        <div className='rtext'>
            <p>Global Workflow</p>
            <span>Sperax has envisioned global impact from day one. Our team consists of purpose-driven engineers, economists, mathematicians, marketing specialists and designers from around the world. Currently with offices in New York, San Francisco, Michigan, Chicago, Singapore, India, and China, Sperax is also expanding in Europe. Members of our team work and communicate on a global schedule, blending our personal lives with the rich enthusiasm and vigor to grow Sperax.</span>
        </div>
    </div>
  )
}

export default CLTcard