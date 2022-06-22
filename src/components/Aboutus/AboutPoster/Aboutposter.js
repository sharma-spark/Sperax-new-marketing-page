import React from 'react'
import './Aboutposter.css'
import slogo from './speraxlogoabout.svg'
const Aboutposter = () => {
  return (
    <div className='Aboutposter'>
        <div className='innerbox'>
            <div className='inbxlogo'><img src={slogo} alt="" /></div>
            <div className='inbxtext'>
                <p>We believe that Sperax's trajectory will be a function of the strength of our ideas and the quality of our execution. We believe that neither groundbreaking ideas nor great execution are found exclusively at higher levels of an organization, particularly ours. Most times, it is just the opposite. Sperax prides itself on being a meritocracy. We bet on talent, tenacity… not titles.</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutposter