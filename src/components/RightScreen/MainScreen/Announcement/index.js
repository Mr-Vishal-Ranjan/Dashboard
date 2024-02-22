import React from 'react'
import './index.css'
import AntCard from './AntCard'
import { useState, useEffect } from 'react';

const Announcement = () => {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // [[[[[[[[[[[[]]]]]]]]]]]] --> This is default code for antCard <-- ]]]]]]]]]]]]]]]]

    // const details = [{
    //     detail: "Outing schedule for every departement",await fetch(`https://jsonplaceholder.typicode.com/posts?`);
    //     time:"5 Minutes ago" ,
    //     img: "./images/pinned.png",
    // },
    // {
    //     detail: "Meeting HR Department",
    //     time:"Yesterday, 12:30 PM" ,
    //     img: "./images/pin.png",
    // },
    // {
    //     detail: "IT Department need two more talents for UX/UI Designer position",
    //     time:"Yesterday, 09:15 AM" ,
    //     img: "./images/pin.png",
    // },
    // {
    //     detail: "IT Department need two more talents for UX/UI",
    //     time:"Yesterday, 09:15 AM" ,
    //     img: "./images/pin.png",
    // },];

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // [[[[[[[[[[[[[[[[[[[[ --> This is infinite scroll in antCard <-- ]]]]]]]]]]]]]]]]]]]]


    // const [details, setDetails] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);

    // const fetchData = async () => {

    //     setIsLoading(true);
    //     setError(null);

    //     try {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`);
    //         const data = await response.json();

    //         setDetails(prevItems => [...prevItems, ...data]);
    //         setPage(prevPage => prevPage + 1);
    //         console.log("fetching");
    //     } catch (error) {
    //         setError(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    // const handleScroll = () => {
    //     if (window.innerHeight + document.getElementsByClassName("announcement").scrollTop !== document.getElementsByClassName("announcement").offsetHeight || isLoading) {
    //         // console.log(window.innerHeight + document.document.getElementsByClassName("announcement").scrollTop ,document.getElementsByClassName("announcement").offsetHeight)
    //         return;
    //     }
    //     fetchData();
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [isLoading]);

    // useEffect(() => {
    //     fetchData()
    //     }
    // , [])
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////
    // [[[[[[[[[[[[[[[[[[[[[--> This is for button on antCard <--]]]]]]]]]]]]]]]]]]]]]

    const [details, setDetails] = useState([]);
    const [page, setPage] = useState(1);

    async function fetch() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`);
        console.table(response.json());
        setDetails(response.json());
    }

    const next = async () => {
        setPage(page + 1);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`);
        setDetails(response.json());
        console.log(page);
    }

    const prev = async () => {
        if (page === 0) return;

        setPage(page - 1);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`);
        setDetails(response.json());
        console.log(page);
    }

    useEffect(fetch,[]);
    //////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div style={{ overflow: 'scroll' }} className='announcement'>
            <div className='titleAct'>
                Announcement
                <div>
                    <select className='dropDown' name="" id="">
                        <option className='dropDown' value="">Today, 13 Sep 2021</option>
                    </select>
                </div>
            </div>

            <div >
                {details.map((i, index) => {
                    return (
                        // <div key={index}>
                        //     <AntCard detail={i.detail} time={i.time} img={i.img}  />
                        // </div>

                        <div key={index}>
                            <AntCard detail={i.title} time={i.body} img="./images/pin.png" />
                        </div>


                    )
                })}

                {/* {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>} */}

            </div>

            <div style={{ display: 'flex', marginLeft: '38%', gap: '10px' }}>
                <button onClick={prev}>Previous</button>
                <button onClick={next}>Next{page}</button>
            </div>
        </div>

    )
}

export default Announcement