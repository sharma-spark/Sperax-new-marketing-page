import React from 'react'
import dollar from './dollar.svg'
import './rightspecs.css'

const Rightspecs = () => {
  return (
    <div className='specscard'>
        <div className='specslogo'><img src={dollar} alt="" /></div>
        <div>
            <div className='specsheading'><p>Skillful people</p></div>
            <div className='specsbodyr'><span>Sperax offers competitive salaries compared to the industry standard, yet as a young company, there is still so much room to grow! Full-time positions include a 401k plan, medical, dental, and vision insurance, and work visa (H1B etc.) applications to nurture the multicultural strength of Sperax.</span></div>
        </div>
    </div>
  )
}

export default Rightspecs