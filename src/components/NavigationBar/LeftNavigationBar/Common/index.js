import React from 'react'
import './index.css';

const Common = (props) => {
  const {name , img , color} = props;
  return (
    <div className='common'>
      <div>
          <img src={img} ></img>
      </div>
      
      <div className={ !color ? 'textc' : 'textc1'}>
          {props.name}
      </div>
      
    </div>
  )
}

export default Common
