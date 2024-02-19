import React from 'react'
import './index.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Announcement from './Announcement'

const MainScreen = () => {

    const card1Details = [{
        title: "Available Position",
        count: 24,
        detail: "4 Urgently needed",
        bgcolor: "#FFEFE7",
        txtColor: "#FF5151"
    },
    {
        title: "Job Open",
        count: 216,
        detail: "4 Active hiring",
        bgcolor: "#E8F0FB",
        txtColor: "#FF5151"
    },
    {
        title: "New Employees",
        count: 24,
        detail: "4 Department",
        bgcolor: "#FDEBF9",
        txtColor: "#EE61CF"
    }];

    const card2Details = [{
        title: "Total Employees",
        count: 216,
        men: "120",
        women: "96",
        img: "./images/graph1.png",
        margin: "10px"
    },
    {
        title: "Talent Request",
        count: 16,
        men: "6",
        women: "10",
        img: "./images/graph2.png",
        margin: "20px"
    }];


    return (
        <div className='mainScreen'>
            <div className='header'>
                Dashboard
            </div>

            <div className='cardTop'>
                {card1Details.map((i, index) => {
                    return (
                        <div key={index}>
                            <Card1 title={i.title} count={i.count} detail={i.detail} bgc={i.bgcolor} color={i.txtColor} />
                        </div>
                    )
                })}
            </div>

            <div className='cardBottom'>
                {card2Details.map((i, index) => {
                    return (
                        <div key={index}>
                            <Card2 title={i.title} count={i.count} men={i.men} women={i.women} img={i.img} margin={i.margin} />
                        </div>
                    )
                })}

                {/* <Card2 title="Available Position" count="216" men="120" women="96" img="./images/graph1.png" margin="12px" />
                <Card2 title="Talent Request" count="16" men="6" women="10" img="./images/graph2.png" margin="35px" /> */}

            </div>

            <div>
                <Announcement />
            </div>
        </div >
    )
}

export default MainScreen