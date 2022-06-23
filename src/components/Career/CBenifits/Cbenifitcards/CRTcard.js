import React from 'react'
import dol from './Cdollar.svg'
import './CLTcard.css'
const CLTcard = () => {
  return (
    <div className='bpcard'>
        <div className='limg'><img src={dol} alt="" /></div>
        <div className='rtext'>
            <p>Competitive salary</p>
            <span>Sperax offers competitive salaries compared to the industry standard. Full-time positions include a 401k plan, medical, dental, and vision insurance, and work visa (H1B etc.) applications to nurture the multicultural strength of Sperax.</span>
        </div>
    </div>
  )
}

export default CLTcard