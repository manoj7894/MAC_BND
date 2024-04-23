import React, { useState, useEffect } from "react";
import axios from "axios";
import maleImage from "../../../Assets/Male-Image.png";
import { CiBookmark } from "react-icons/ci";
import pages from "../Pages.module.css";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const HrJobDetail = ({ jobId }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/jobs/job/${jobId}`);
        const selectedJob = response.data.jobs;
        setJob(selectedJob);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
  }, [jobId]);

  return (
    <>
      {job ? (
        <div key={job._id}>
          <h2>{job.jobTitle} needed.</h2>
          <p style={{ width: "50vw" }}>{job.jobDescription}</p>
          <p style={{ paddingTop: "20px" }}>
            <strong>Requirements</strong>
          </p>
          <p style={{ width: "50vw" }}>{job.responsibility}</p>

          <div className={pages.hr_job_detail_skill_container_main}>
            <div>
              <div
                style={{ color: "rgba(255, 184, 0, 1)", paddingTop: "20px" }}
              >
                Skills
              </div>
            </div>
            <div>
              <ul className={pages.hr_job_detail_skill_container}>
                {job.skilRequired.map((skill) => (
                  <li key={skill.index} className={pages.hr_job_detail_skill}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={pages.hr_job_detail_location}>
            <p className={pages.hr_job_detail_location_childrens}>
              Location -{" "}
              <span>
                <strong>{job.location}</strong>
              </span>
            </p>
            <p className={pages.hr_job_detail_location_childrens}>
              Type -{" "}
              <span>
                <strong>{job.employmentType}</strong>
              </span>
            </p>
            <p className={pages.hr_job_detail_location_childrens}>
              Salary -{" "}
              <span>
                <strong>{job.salaryRange}</strong>
              </span>
            </p>
          </div>
          <hr />

          <div className={pages.job_seeker_card_container}>
            <div className={pages.job_seeker_card}>
              <div className={pages.job_seeker_card_grid}>
                <div>
                  <img
                    src={maleImage}
                    alt="network-error"
                    className={pages.job_seeker_card_image}
                  />
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <div>Steve Morgan</div>
                  <div style={{paddingTop:'5px', lineHeight:"20px"}}>
                    Had 5 years of working experience as design lead. Working
                    for a reputed.com <strong>See More</strong>
                  </div>
                </div>
                <div>
                  <CiBookmark className={pages.job_seeker_card_bookmark}/>
                </div>
              </div>
              <div style={{paddingTop:'40px', marginLeft:'10px'}}>
                <div>
                  Location - <strong>NY</strong> <span style={{paddingLeft:"8vw"}}> Type - <strong>Remote</strong></span>
                </div>
              </div>
              <hr />
              <div>
                <div style={{paddingLeft:'10px'}}><strong>Skills</strong></div>
                <ul className={pages.job_seeker_card_skills_list_container}>
                  <li className={pages.job_seeker_card_skills}>Sketch</li>
                  <li className={pages.job_seeker_card_skills}>Sketch</li>
                  <li className={pages.job_seeker_card_skills}>Sketch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default HrJobDetail;
