import React from 'react'
import './index.css';

const Common = (props) => {
  return (
    <div className='common'>
      <div>
          <img src={props.img} ></img>
      </div>
      
      <div className='textc'>
          {props.name}
      </div>

      <div className='textc1'>
          {props.name2}
      </div>
      
    </div>
  )
}

export default Common
