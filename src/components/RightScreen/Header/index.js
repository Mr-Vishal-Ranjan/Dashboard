import React from 'react'
import './index.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="search">
        <input
          className='searchInput'
          type="text"
          placeholder="Search"
        />
        <button className="searchButton">
          <img style={{ height: '30px', }} src='./images/searchButton.png'></img>
        </button>
      </div>

      <div>
        <img style={{ marginTop: '32px', marginLeft: '400px' }} src='./images/notification.png'></img>
      </div>

      <div>
        <img style={{ marginTop: '32px', marginLeft: '25px' }} src='./images/chat.png'></img>
      </div>

      <div>
        <img style={{ marginTop: '23px', marginLeft: '25px' }} src='./images/profile.png'></img>
      </div>

    </div >
  )
}

export default Header