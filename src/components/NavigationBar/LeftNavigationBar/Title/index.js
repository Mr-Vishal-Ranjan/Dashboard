import React from 'react'
import './index.css';

const Title = (props) => {
  return (
    <>
      <div className='title'>{props.name}</div>
      {/* <style jsx>
        {
          ` .mainMenu{
              color : red;
            }
          `
        }
      </style> */}
    </>
    
  )
}

export default Title