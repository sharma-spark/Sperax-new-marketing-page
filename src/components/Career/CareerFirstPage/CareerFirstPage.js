import React, {useEffect} from 'react'
import './CareerFirstPage.css'
import carrow from './Carrow.svg'
import PhotoSlider from './Photoslider/Photoslider.js'
import PhotoSlidermob from './Photoslider/PhotoSlidermob.js'
import fpbg from './fpbg.svg'

const CareerFirstPage = () => {
    useEffect(() => {
        document.title = "Sperax Careers | Building a Global Financial Future";
    });

    return (
        <div className='Careerfp' style={{backgroundImage: `url(${fpbg})`}}>
            <div className='Cheadleft'>
                <p>Build your future at Sperax</p>
                <span>Success at Sperax means working fast and fun in a connected community. You will love working with us if you are adaptive, communicative, creative, and most of all, passionate about building financial freedom through blockchain technology. Sperax is growing fast, with high impact team members from across the globe.
            <br/>Are you ready to join us?</span>
                <div className='cheadbutton'>
                    <a className='sop' href="https://jobs.lever.co/sperax/"><img src={carrow} alt=""/> See Open
                        Positions</a>
                </div>
            </div>
            <div className='Cslider'>
                <PhotoSlider/>
            </div>
            <div className='CslidermobileO'>
                <div className='Cslideri'><PhotoSlidermob/></div>
            </div>


            <div className='buttonformobile'>
                <a href="https://jobs.lever.co/sperax/"><img src={carrow} alt=""/> See Open Positions</a>
            </div>

        </div>
    )
}

export default CareerFirstPage