import React from 'react'
import './index.css';
import Brand from './Brand'
import Title from './Title';
import Common from './Common';

const LeftNavigationBar = () => {
  return (
    <div>
        <Brand/>

        <div>
          <Title name="MAIN MENU"/>
          <Common name2="Dashboard" img="./images/dashboard.png"/>
          <Common name="Recruitment" img="./images/g7.png"/>
          <Common name="Schedule" img="./images/schedule.png"/>
          <Common name="Employee" img="./images/logo.png"/>
          <Common name="Department" img="./images/department.png"/>
        </div>

        <div>
          <Title name="OTHER"/>
          <Common name="Support" img="./images/support.png"/>
          <Common name="Setting" img="./images/setting.png"/>
        </div>
        
    </div>
  )
}

export default LeftNavigationBar