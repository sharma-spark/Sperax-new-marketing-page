import React from 'react'
import './specscard.css'
import { divide } from 'lodash'
import Leftspecs from './Leftspecs.js'
import Rightspecs from './Rightspecs.js'

const Aboutspecs = () => {
  return (
    <div className='speccards'>
      <Leftspecs/>
      <Rightspecs/>
    </div>
  )
}

export default Aboutspecs