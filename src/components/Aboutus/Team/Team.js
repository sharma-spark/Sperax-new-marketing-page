import React from 'react'
import './team.css'
import Personcard from './Personcard/Personcard.js'
import rey from './photos/rey.svg'
import nicolas from './photos/nicolas.svg'
import subh from './photos/subh.png'
import joe from './photos/joe.svg'
import alec from './photos/alec.svg'
import atreyee from './photos/atreyee.svg'
import david from './photos/david.svg'
import data from './persondescp.json'

const Team = () => {
  return (
    <div className='teamo'>
    <div className='team'>
        <Personcard image={rey} name={"Rey Maximo"} desg={"Engineering"} descp={data.rey} linkedin={"https://www.linkedin.com/in/maximo/"}/>
        <Personcard image={nicolas} name={"Nicolas Andreoulis"} desg={"Research"} descp={data.nicolas}/>
        <Personcard image={subh} name={"Subhajit Ray"} desg={"Product"} descp={data.subhajit}  linkedin={"https://www.linkedin.com/in/subhajit1/"}/>
        <Personcard image={joe} name={"Joe Yu"} desg={"Engineering"} descp={data.joe} linkedin={"https://www.linkedin.com/in/zhou-y-400894184/"}/>
        <Personcard image={alec} name={"Alec Shaw"} desg={"Marketing and BD"} descp={data.alec} twitter={"https://twitter.com/Alec_Sperax"} linkedin={"https://www.linkedin.com/in/alectshaw/"}/>
        <Personcard image={atreyee} name={"Atreyee Bhaumik"} desg={"Product"} descp={data.atreyee} linkedin={"https://www.linkedin.com/in/atreyeebhaumik/"} />
        <Personcard image={david} name={"David Zhao"} desg={"Engineering"} descp={data.david} linkedin={"https://www.linkedin.com/in/david-zhao-b40116112/"} twitter={"https://twitter.com/DSperax"}/>
    </div>
    </div>
  )
}

export default Team