import React from 'react'
import './index.css'

const AntCard = (props) => {

    return (
        <div className='antCard'>
            <div className='antDetail'>
                {props.detail}
                <div className='antTime'>
                    {props.time}
                </div>
            </div>
            
            <div>
                <img className='pin' src={props.img}></img>
                <img className='dot' src='./images/threeDot.png'></img>
            </div>
            
            
        </div>
    )
}

export default AntCard