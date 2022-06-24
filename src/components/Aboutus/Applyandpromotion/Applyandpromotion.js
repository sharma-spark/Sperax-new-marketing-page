import React from 'react'
import './applyandpromotion.css'
import tick from './tick.svg'

const Applyandpromotion = () => {
  return (
    <>
    <div className='Applyandpromotion'>
        <div className='apupper'>
            <div className='aphead'>
                <p>Help us build a transparent, diverse and collaborative space where all opinions are heard</p>
            </div>
            <div className='apapply'>
                <a href="./career">Apply now</a>
            </div>
        </div>
        <div className='aplower'>
            <table className='faci'>
                <tr>
                    <td><img src={tick} alt="" /> Competitive salary and token plan</td>
                    <td><img src={tick} alt="" /> Work visa sponsorship</td>
                </tr>
                <tr>
                    <td><img src={tick} alt="" /> Multicultural work environment</td>
                    <td><img src={tick} alt="" /> 401k plan</td>
                </tr>
                <tr>
                    <td><img src={tick} alt="" /> Medical, dental, and vision insurance</td>
                    <td><img src={tick} alt="" /> Beautiful office space</td>
                </tr>
            </table>
        </div>
    </div>
    <div className='apmobileo'>
    <div className='apmobilei'>
        <p className='apmhead'>Help us build a transparent, diverse and collaborative space where all opinions are heard</p>
        <div className='apmpoints'>
        <span><img className='apmimg' src={tick} alt="" />Competitive salary and token plan</span>
        <span><img className='apmimg' src={tick} alt="" />Work visa sponsorship</span>
        <span><img className='apmimg' src={tick} alt="" />Multicultural work environment</span>
        <span><img className='apmimg' src={tick} alt="" />401k plan</span>
        <span><img className='apmimg' src={tick} alt="" />Beautiful office space</span>
        <span><img className='apmimg' src={tick} alt="" />Medical, dental, and vision insurance</span>
        </div>
        <div className='apmapply'>
                <a href="./career">Apply now</a>
         </div>

    </div>
    </div>
    </>
  )
}

export default Applyandpromotion