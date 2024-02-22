import React from "react";
import "./index.css";
import AntCard from "./AntCard";
import { useState, useEffect } from "react";

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

  /////////////////////////////////////////////////////////////////////////////////////////////
  // [[[[[[[[[[[[[[[[[[[[[--> This is for button on antCard <--]]]]]]]]]]]]]]]]]]]]]

  //   const [details, setDetails] = useState([]);
  //   const [page, setPage] = useState(1);

  //   const response = 0;
  //   const data = [];

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDetails(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);

  //   const next = async () => {
  //     console.log("next");
  //     if (data.length<3) return;
  //     setPage(page + 1);
  //     await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDetails(data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   };

  //   const prev = async () => {
  //     if (page === 1) return;

  //     setPage(page - 1);
  //     await fetch(
  //       `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDetails(data); Line 71:58:  'loading' is not def
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   };

  ///////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////
  // [[[[[[[[[[[[[[[[[[[[ --> This is infinite scroll in antCard <-- ]]]]]]]]]]]]]]]]]]]]

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
      );
      const data = await response.json();
      setDetails((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      fetchData();
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      style={{ overflowY: "scroll" }}
      className="announcement"
      onScroll={handleScroll}
    >
      <div className="titleAct">
        Announcement
        <div>
          <select className="dropDown" name="" id="">
            <option className="dropDown" value="">
              Today, 13 Sep 2021
            </option>
          </select>
        </div>
      </div>

      <div>
        {details.map((i, index) => {
          return (
            // <div key={index}>
            //     <AntCard detail={i.detail} time={i.time} img={i.img}  />
            // </div>

            <div key={index}>
              <AntCard detail={i.title} time={i.body} img="./images/pin.png" />
            </div>
          );
        })}
        {loading && <p>Loading...</p>}{" "}
        {/* {error && <p>Error: {error.message}</p>} */}
      </div>

      {/* <div style={{ display: "flex", marginLeft: "38%", gap: "10px" }}>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div> */}
    </div>
  );
};

export default Announcement;
