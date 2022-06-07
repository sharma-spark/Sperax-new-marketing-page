import React from 'react'
import './earnwithusds.css'
import Horizontalposters from './horizontal/Horizontalposters.js'
import Bigposter from './Bigposter/Bigposter.js'

const Earnwithusds = () => {
  return (
    <div className='earn'>
        <div className='earnhead'>
            <h3>Earn with USDs</h3>
        </div>
        <Horizontalposters/>
        <Bigposter/>
    </div>
  )
}

export default Earnwithusds