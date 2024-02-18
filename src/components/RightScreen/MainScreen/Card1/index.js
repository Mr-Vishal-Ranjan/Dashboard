import React from 'react'
import './index.css'

const Card1 = (props) => {
    return (
        <div className='card1' style={{backgroundColor:props.bgc}}>
            <div className='card1Title'>
                {props.title}
            </div>
            
            <div className='card1Count'>
                {props.count}
            </div>

            <div className='card1Detail' style={{color:props.color}}>
                {props.detail}
            </div>

        </div>
    )
}

export default Card1