import React from 'react'
import thum from './Cthums.svg'
import './CLTcard.css'
const CLTcard = () => {
  return (
    <div className='bpcard'>
        <div className='limg'><img src={thum} alt="" /></div>
        <div className='rtext'>
            <p>Growth focus</p>
            <span>As a fast-growing company, dynamic and creative workflow is essential to our continuing development. We aim for connection beyond our work with a fun hour on Zoom each week, since teams that care for each other work better together. As a young company, we are poised for explosive growth. Being on the Sperax team in its early stages means that each individual has a large impact on the future of Sperax. </span>
        </div>
    </div>
  )
}

export default CLTcard