import React from 'react'
import './index.css'
import RecentActivity from './RecentActivity'
import Upcoming from './Upcoming'

const Activity = () => {
  return (
    <div className='activity'>
      <RecentActivity/>
      <Upcoming/>
    </div>
  )
}

export default Activity