import React, {useState} from 'react'
import './personcard.css'
import tweet from '../abouttwitter.svg'
import linkedin from '../aboutlinkedin.svg'
import closedsc from './closedsc.svg'

const Personcard = (props) => {
  const[open,setOpen]=useState(true);
  return (
    <div className='personcard' style={{backgroundImage:`url(${props.image})`}}>
     { open && <div className='nameplate'>
          <div className='nametext'>
            <p>{props.name}</p>
            <span>{props.desg}</span>
            <h6 className='readmorebutton' onClick={() => setOpen(!open)}>Read more →</h6>
          </div>
          <div className='personsocial'>
              {props.twitter && <a href={props.twitter}><img src={tweet} alt="" /></a>}
              {props.linkedin && <a href={props.linkedin}><img src={linkedin} alt="" /></a>  }
          </div>
      </div>}
      { !open && <div className='presonaldesc'>
        <div className='presonaldesct'><img onClick={() => setOpen(!open)} src={closedsc} alt="" /></div>
        <div className='presonaldescb'><p>{props.descp}</p></div>
      </div>

      }
    </div>
  )
}

export default Personcard