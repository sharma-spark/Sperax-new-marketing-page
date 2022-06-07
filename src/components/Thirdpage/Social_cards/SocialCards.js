import React from 'react'
import Scard1 from './Scard1.js'
import Scard2 from './Scard2.js'
import Scard3 from './Scard3.js'
import Scard4 from './Scard4.js'
import './scards.css'

const SocialCards = () => {
  return (
    <div className='scards'>
      <div className='boxt'>
      <Scard1/>
      <Scard2/>
      </div>
      <div className='boxb'>
      <Scard3/>
      <Scard4/>
      </div>
    </div>
  )
}

export default SocialCards