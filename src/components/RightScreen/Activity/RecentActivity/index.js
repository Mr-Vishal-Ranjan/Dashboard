import React from 'react'
import './index.css'

const RecentActivity = () => {
  return (
    <div className='recentActivity'>
      <div className='raTitle'>
        Recently Activity
      </div>

      <div className='raTime'>
        10.40 AM, Fri 10 Sept 2021
      </div>

      <div className='raTitle1'>
        You Posted a New Job
      </div>

      <div className='raDetail'>
        Kindly check the requirements and terms of work and make sure everything is right.
      </div>

      <div style={{display:'flex' , gap:'35px'}}>
        <div className='timeDetail'>
          Today you makes 12 Activity
        </div>

        <div >
          <button className='raButton'>See all my activity</button>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity