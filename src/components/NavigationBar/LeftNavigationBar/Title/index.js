import React from 'react'
import './index.css';

const Title = (props) => {
  return (
    <>
      <div className={props.margin?'title1':'title'}>{props.name}</div>
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