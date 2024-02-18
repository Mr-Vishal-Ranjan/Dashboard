import React from 'react'
import './index.css'

const AntCard = () => {
    return (
        <div className='antCard'>
            <div className='antDetail'>
                Outing schedule for every departement
                <div className='antTime'>
                    5 Minutes ago
                </div>
            </div>
            
            <div>
                <img className='pin' src='./images/pinned.png'></img>
                <img className='dot' src='./images/threeDot.png'></img>
            </div>
            
            
        </div>
    )
}

export default AntCard