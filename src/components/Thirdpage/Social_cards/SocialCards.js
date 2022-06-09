import React from 'react'
import Scard1 from './Scard1.js'
import Scard2 from './Scard2.js'
import Scard3 from './Scard3.js'
import Scard4 from './Scard4.js'
import './scards.css'

const SocialCards = (discord) => {
  return (
    <div className='scards'>
      <div className='boxt'>
      <a href="https://discord.com/invite/sperax"><Scard1 discord={discord}/></a>
      <a href="https://t.me/SperaxUSD"><Scard2/></a>
      </div>
      <div className='boxb'>
      <a href="https://twitter.com/SperaxUSD"><Scard3/></a>
      <a href="https://medium.com/sperax"><Scard4/></a>
      </div>
    </div>
  )
}

export default SocialCards