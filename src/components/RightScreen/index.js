import React from 'react'
import './index.css';
import Header from './Header';
import MainScreen from './MainScreen';
import Activity from './Activity';

const RightScreen = () =>{
  return (
    <>
      <div>
        <Header/>
        {/* <MainScreen/> */}
      </div>

      <div className='line'></div>

      <div className='rightScreen'>
        <MainScreen/>
        <Activity/>
      </div>
    </>
    

  )
}

export default RightScreen