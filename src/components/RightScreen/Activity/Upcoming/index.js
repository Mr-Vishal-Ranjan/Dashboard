import React from 'react'
import './index.css'
import UpcCard from './UpcCard'

const Upcoming = () => {
  const details=[
    {
        detail: "Interview with candidates",
        time:"Today - 10.30 AM",
    },
    {
        detail: "Short meeting with product designer from IT Departement",
        time:"Today - 09.15 AM",
    },
    {
        detail: "Interview with candidates",
        time:"Today - 10.30 AM",
    },
  ]
  return (
    <div className='upcoming' style={{ overflow: 'scroll' }}>
        <div style={{display:'flex' ,gap:'75px'}}>
            <div className='titleUpc'>
                Upcoming Schedule
            </div>

            <div>
                <select className='dropDown1' name="" id="">
                    <option className='dropDown1' value="">Today, 13 Sep 2021</option>
                </select>
            </div>
        </div>

        <div className='head1'>
            Priority
        </div>

        <div>
            <UpcCard detail="Review candidate applications" time="Today - 11.30 AM" />
        </div>

        <div className='head1' style={{marginTop:'10px'}}>
            Other
        </div>

        {details.map((i, index) => {
            return (
                <div key={index}>
                    <UpcCard detail={i.detail} time={i.time}/>
                </div>
            )
        })}
        {/* <UpcCard/>
        <UpcCard/>
        <UpcCard/>
        <UpcCard/> */}
    </div>
  )
}

export default Upcoming