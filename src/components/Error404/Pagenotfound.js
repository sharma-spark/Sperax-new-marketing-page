import React from 'react'
import errori from './error.svg'
import './pagenot.css'
const Pagenotfound = () => {
  return (
    <div className='pagenot'>
    <img src={errori} alt="" />
    <p>Oops! Nothing was found</p>
    <h3 className='formobpara'>Oops!</h3>
    <span>The page you are looking for doesn’t exist</span>
    <a href="/">Go to homepage →</a>
    </div>
  )
}

export default Pagenotfound