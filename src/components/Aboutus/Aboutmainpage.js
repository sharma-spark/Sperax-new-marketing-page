import React, { useEffect } from 'react';
import Abouthead from './Abouthead'
import './Aboutmainpage.css'
import Aboutposter from './AboutPoster/Aboutposter.js'
import Aboutspecs from './Aboutspecs/Aboutspecs.js'
import Teamintro from './Teamintro/Teamintro.js'
import Team from './Team/Team.js'
import Advisorintro from './Advisorintro/Advisorintro.js'
import AmberCF from './AmberCF/AmberCF.js'
import Applyandpromotion from './Applyandpromotion/Applyandpromotion.js'

const Aboutmainpage = () => {
    useEffect(() => {
        document.title = "Sperax | Meet The Team";
    });

    return (
        <div className='Aboutmainpage'>
            <Abouthead/>
            <Aboutposter/>
            <Aboutspecs/>
            <Teamintro/>
            <Team/>
            <Advisorintro/>
            <AmberCF/>
            <Applyandpromotion/>
        </div>
    )
}

export default Aboutmainpage