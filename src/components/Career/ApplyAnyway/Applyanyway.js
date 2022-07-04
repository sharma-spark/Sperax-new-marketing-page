import React from 'react'
import './applyanyway.css'
import apparrow from './apparrow.svg'
const Applyanyway = () => {
  return (
    <div className='aplyanyo'>
    <div className='aplyany'>
        <div className='aptop'>
        <h3 className='aphead'>View all our open positions</h3>
        <a className='apbut' href="https://jobs.lever.co/sperax/"> <img src={apparrow} alt="" />See open positions</a>
        </div>
        <div className='lastlbox'>
        <pre className='lastline'>or send us an email with your resume to <a href="mailto:careers@sperax.io">careers@sperax.io</a> </pre>
        <p className='lastlinemob'>or send us an email with your resume to <a href="mailto:careers@sperax.io">careers@sperax.io</a></p>
        
        </div>
        
    </div>
    </div>
  )
}

export default Applyanyway