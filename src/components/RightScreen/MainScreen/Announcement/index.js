import React from 'react'
import './index.css'
import AntCard from './AntCard'

const Announcement = () => {
    return (
        <div style={{ overflow: 'scroll' }} className='announcement'>
            <div className='titleAct'>
                Announcement
                <div>
                    <select className='dropDown' name="" id="">
                        <option className='dropDown' value="">Today, 13 Sep 2021</option>
                    </select>
                </div>
            </div>
            <div >
                <AntCard />
                <AntCard />
                <AntCard />
                <AntCard />
            </div>
        </div>

    )
}

export default Announcement