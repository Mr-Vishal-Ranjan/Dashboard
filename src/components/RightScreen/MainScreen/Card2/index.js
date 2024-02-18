import React from 'react'
import './index.css'

const Card2 = (props) => {
    return (
        <div className='card2'>
            <div >
                <div className='card2Title'>
                    {props.title}
                </div>

                <div className='card2Count'>
                    {props.count}
                </div>

                <div style={{ marginTop: '15px' }}>
                    <div className='men'>{props.men} Men</div>
                    <div className='men'>{props.women} Women</div>
                </div>
            </div>

            <div style={{marginLeft:props.margin}}>
                <img className='graph' src={props.img}></img>
            </div>

        </div>
    )
}

export default Card2