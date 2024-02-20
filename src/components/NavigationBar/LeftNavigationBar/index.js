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
          <Common name="Dashboard" img="./images/dashboard.png" color/>
          <Common name="Recruitment" img="./images/g7.png"/>
          <Common name="Schedule" img="./images/schedule.png" />
          <Common name="Employee" img="./images/employee.png"/>
          <Common name="Department" img="./images/department.png"/>
        </div>

        <div>
          <Title name="OTHER" margin="1"/>
          <Common name="Support" img="./images/support.png"/>
          <Common name="Setting" img="./images/setting.png"/>
        </div>
        
    </div>
  )
}

export default LeftNavigationBar