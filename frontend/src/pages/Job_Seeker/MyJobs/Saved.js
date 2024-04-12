import React, { useState } from "react";
import JobStyle from "../MyJobs/Job.module.css";
import { useNavigate } from "react-router-dom";

const Saved = () => {
  const [saved_jobs] = useState([
    {
      img: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      jobrole: "Software Engineer",
      lpa: 30,
      location: "Indore",
      category: "Fresher",
    },
  ]);
  const navi = useNavigate();

  return (
    <>
      {saved_jobs &&
        saved_jobs.map((item, index) => {
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
                    <i class="fa-solid fa-tag"></i>

                    <button className={JobStyle.btn_apply}>APPLY</button>
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
      {saved_jobs.length === 0 && (
        <>
          <p>You have not Save any jobs. Find and grab the opportunity now !</p>
          <button onClick={() => navi("/")}>Find Jobs !</button>
        </>
      )}
    </>
  );
};

export default Saved;
