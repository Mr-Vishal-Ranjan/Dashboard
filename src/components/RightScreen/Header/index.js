import React from 'react'
import './index.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="search">
        <input
          className='searchInput'
          type="text"
          placeholder="   Search"
        />
        <button className="searchButton">
          <img style={{ height: '30px', }} src='./images/searchButton.png'></img>
        </button>
      </div>

      <div>
        <img style={{ marginTop: '55px', marginLeft: '820px' }} src='./images/notification.png'></img>
      </div>

      <div>
        <img style={{ marginTop: '55px', marginLeft: '30px' }} src='./images/chat.png'></img>
      </div>

      <div>
        <img style={{ marginTop: '46px', marginLeft: '30px' }} src='./images/profile.png'></img>
      </div>

    </div >
  )
}

export default Header