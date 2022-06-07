import React from 'react'
import './Supply.css'

const Supply = (props) => {
  return (
    <div className='sup'>
        <div className='total'>
            <div className='toptext'>
                <p>Total Supply</p>
            </div>
            <div className='bottomtext'>
                <h3>{props.totalSupply} <span  className='togrey'>SPA</span></h3>
            </div>
        </div>
        <div>
            <div className='toptext'>
                <p>Circulating Supply</p>
            </div>
            <div className='bottomtext'>
                <h3>{props.circulate} <span  className='togrey'>SPA</span></h3>
            </div>
        </div>

    </div>
  )
}

export default Supply