import React from 'react'
import './index.css'

const UpcCard = (props) => {
  return (
    <div className='upcCard'>
        <div className='upcDetail'>
            {props.detail}
            {/* Review candidate applications */}
            <div className='upcTime'>
                {props.time}
                {/* Today - 11.30 AM */}
            </div>
        </div>
            
        <div>
            <img className='dot' src='./images/threeDot.png'></img>
        </div>
            
            
    </div>
  )
}

export default UpcCard