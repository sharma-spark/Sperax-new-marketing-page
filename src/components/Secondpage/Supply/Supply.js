import React from 'react'
import './Supply.css'

const Supply = (props) => {
    console.log(props);
  return (
    <div className='sup'>
        <div className='total'>
            <div className='toptext'>
                <p>Total Supply</p>
            </div>
            <div className='bottomtext'>
                <h3>{props.totalSupply || 0} <span  className='togrey'>SPA</span></h3>
            </div>
        </div>
        <div>
            <div className='toptext'>
                <p>Circulating Supply</p>
            </div>
            <div className='bottomtext'>
                <h3>{props.circulate || 0} <span  className='togrey'>SPA</span></h3>
            </div>
        </div>

    </div>
  )
}

export default Supply