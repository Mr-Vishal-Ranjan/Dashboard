import React from 'react'
import './index.css';

const Header = () => {
  return (
    <div className='header'>
      <img className="threeLine" src='./images/threeLine.png'></img>
      <div className="search">
        <input
          className='searchInput'
          type="text"
          placeholder="Search"
        />
        <button className="searchButton">
          <img src='./images/searchButton.png'></img>
        </button>
      </div>

      <div >
        <img  className='notification' src='./images/notification.png'></img>
      </div>

      <div>
        <img className='chat'  src='./images/chat.png'></img>
      </div>

      <div>
        <img className='profile' src='./images/profile.png'></img>
      </div>

      <div>
        <img className='profile1' src='./images/smallProfile.png'></img>
      </div>

    </div >
  )
}

export default Header