import React from 'react'
import './index.css'
import AntCard from './AntCard'

const Announcement = () => {
    const details = [{
        detail: "Outing schedule for every departement",
        time:"5 Minutes ago" ,
        img: "./images/pinned.png",
    },
    {
        detail: "Meeting HR Department",
        time:"Yesterday, 12:30 PM" ,
        img: "./images/pin.png",
    },
    {
        detail: "IT Department need two more talents for UX/UI",
        time:"Yesterday, 09:15 AM" ,
        img: "./images/pin.png",
    },
    {
        detail: "IT Department need two more talents for UX/UI",
        time:"Yesterday, 09:15 AM" ,
        img: "./images/pin.png",
    },];

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
            {details.map((i, index) => {
                return (
                    <div key={index}>
                        <AntCard detail={i.detail} time={i.time} img={i.img}  />
                    </div>
                )
            })}
                
            </div>
        </div>

    )
}

export default Announcement