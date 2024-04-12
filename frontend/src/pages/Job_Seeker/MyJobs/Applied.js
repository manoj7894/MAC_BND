import React, { useState } from "react";
import JobStyle from "../MyJobs/Job.module.css";
import {useNavigate}from 'react-router-dom'

const Applied = () => {
    const navi=useNavigate()
    const [applied_jobs] = useState([
    {
      img: "https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg",
      jobrole: "Software Engineer",
      lpa: 30,
      location: "Indore",
      category: "Fresher",
    },
    {
      img: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png",
      jobrole: "Software Engineer",
      lpa: 30,
      location: "Indore",
      category: "Fresher",
    },
    {
      img: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      jobrole: "Software Engineer",
      lpa: 30,
      location: "Indore",
      category: "Fresher",
    },
    {
      img: "https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg",
      jobrole: "Software Engineer",
      lpa: 30,
      location: "Indore",
      category: "Fresher",
    },
  ]);
  return (
    <>
      {applied_jobs &&
        applied_jobs.map((item, index) => {
          return (
            <>
              <div className={JobStyle.company_box} key={index}>
                <div className={JobStyle.saved_job_box}>
                  <div className={JobStyle.company_job_profile}>
                    <img src={item.img} alt="comp_logo" />
                    <div className={JobStyle.job_position}>
                      <h5>{item.jobrole}</h5>
                      <p>12 hours ago</p>
                    </div>
                  </div>
                  <div className={JobStyle.lpa_box}>
                    <i
                      class="fa-solid fa-money-check-dollar"
                      style={{ color: "#067418" }}
                    ></i>
                    <span style={{ fontWeight: "bold" }}>{item.lpa}K</span>
                    <span style={{ color: "#9595b4", fontSize: 12 }}>
                      /Month
                    </span>
                  </div>
                  <div className={JobStyle.apply_box}>
                    <button className={JobStyle.btn_applied}>APPLIED</button>
                  </div>
                </div>
                <div className={JobStyle.location_box}>
                  <div className={JobStyle.req_1}>
                    <i
                      class="fa-solid fa-location-dot"
                      style={{ color: "black" }}
                    ></i>

                    {item.location}
                  </div>
                  <div className={JobStyle.req_1}>
                    <div>
                      <i
                        class="fa-solid fa-envelope-open-text"
                        style={{ color: "black" }}
                      ></i>
                    </div>
                    {item.category}
                  </div>
                  <div className={JobStyle.req_1}>
                    <div>
                      <i
                        class="fa-solid fa-droplet"
                        style={{ color: "black" }}
                      ></i>
                    </div>
                    fulltime
                  </div>
                </div>
              </div>
            </>
          );
        })}
      {applied_jobs.length === 0 && 
      <><p>You have not applied for any jobs. Find and grab the opportunity now !</p>
      <button onClick={()=>navi('/')}>Find Jobs !</button></>
      }
    </>
  );
};

export default Applied;
