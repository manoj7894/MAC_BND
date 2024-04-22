import React, { useEffect, useState } from "react";
import Profile_style from "./Profile_style.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CancelPopup from "./CancelPopup/CancelPopup";

const Profile_details = () => {
  const [start_popup, setstart_popup] = useState(false);
  const [cancelpopup, setcancelpopup] = useState(false);
  const navigateTO =useNavigate()
  const Job =useLocation().state
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("name");
  const [userData, setuserData] = useState([]);
//   console.log(userData);

  const [firstname, lastname] = username.split(" ");
  // const resumes=userData.resume[0].filename
  // console.log(resumes);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/user?email=${email}`
      );
      setuserData(response.data.userDetails);
    };
    fetchData();
  }, [email]);

  const getFirstResumeFilename = () => {
    if (userData.resume && userData.resume.length > 0) {
      return userData.resume[0].filename;
    }
    return null; // Return null if no resume data is available
  };

  const firstResumeFilename = getFirstResumeFilename();

  const calculateExperienceInYears = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds
    const difference = end - start;

    // Convert milliseconds to years
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Approximate milliseconds in a year
    const years = difference / millisecondsInYear;

    // Round down to the nearest whole year
    const totalYears = Math.floor(years);

    return totalYears;
  };
  const companyStartDate = userData.company_start_date;
  const companyEndDate = userData.company_end_date;

  const experienceInYears = calculateExperienceInYears(
    companyStartDate,
    companyEndDate
  );

  const handleApply = (e) => {
    e.preventDefault();
 if(!cancelpopup&&!start_popup){
  setstart_popup(!start_popup);
 }
  };
  const handleCancel=()=>{
    // setstart_popup(!start_popup)
    setcancelpopup(!cancelpopup);

  }
  return (
    <>
      {userData && (
        <>
          <div
            className={
              start_popup
                ? `${Profile_style.start_assesment_popup}`
                : `${Profile_style.start_assesment_popup_hide}`
            }
          >
                        <div className={Profile_style.fa_xmark_2} onClick={handleCancel}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <div className={Profile_style.start_quiz_des}>

              <div className={Profile_style.check_logo}><i className="fa-solid fa-check"></i></div>
              <h3>Success</h3>
              <p>
                Congratulations, you are one step closer to complete your
                application
              </p>
              <Link
                to={cancelpopup?"":"/assessment-Instructions"}
                  state={Job}
                  className={Profile_style.start_assesment_btn}
              >
                Start Assesment
              </Link>
            </div>
          </div>
          {cancelpopup && <CancelPopup/>}
          <div
            className={
              start_popup
                ? `${Profile_style.profile_blur_container}`
                : `${Profile_style.profile_main_container}`
            }
          >
            <form className={Profile_style.form_container}>
          <div className={Profile_style.fa_xmark}>
          <i className="fa-solid fa-xmark" onClick={()=>navigateTO(-1)}></i>
          </div>

              <h2>Basic Details</h2>
              <div className={Profile_style.name_section}>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" value={firstname} />
                </div>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" value={lastname} />
                </div>
              </div>
              <div className={Profile_style.email_box}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={userData.email} />
                <div className={Profile_style.input_container}>
                    <label htmlFor="resume">Upload Resume *</label>
                    <input
                      type="text"
                      id="resume"
                      value={firstResumeFilename}
                    />
                  </div>
              </div>
              <div className={Profile_style.basic_details_box}>
                <div className={Profile_style.left_basic_details}>
                  <div className={Profile_style.input_container}>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                      type="number"
                      id="phonenumber"
                      value={userData.phone_number}
                    />
                  </div>
          
                  <div className={Profile_style.input_container}>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" value={userData.country} />
                  </div>
                </div>
                <div className={Profile_style.right_basic_details}>
                  <div className={Profile_style.input_container}>
                    <label htmlFor="DOB">Date of Birth</label>
                    <input
                      type="text"
                      id="DOB"
                      value={new Date(userData.dob)}
                    />
                  </div>
                  <div className={Profile_style.input_container}>
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" value={userData.state} />
                  </div>
                
                </div>
              </div>
              <h2>Education Details</h2>
              <div className={Profile_style.name_section}>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="course">Course</label>
                  <input type="text" id="course" value={userData.course} />
                </div>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="specialization">Specialization</label>
                  <input
                    type="text"
                    id="specialization"
                    value={userData.course}
                  />
                </div>
              </div>
              <div className={Profile_style.name_section}>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="university">University</label>
                  <input type="text" id="university" value={userData.college} />
                </div>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="percentage">Percentage</label>
                  <input
                    type="text"
                    id="percentage"
                    value={`${userData.percentage}%`}
                  />
                </div>
              </div>
              <h2>Experience Details</h2>
              <div className={Profile_style.name_section}>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" value={userData.company} />
                </div>
                <div className={Profile_style.input_name_container}>
                  <label htmlFor="experience">Experience</label>
                  <input
                    type="text"
                    id="experience"
                    value={`${experienceInYears} years`}
                  />
                </div>
              </div>
              <br />
              <button type="submit" className={Profile_style.save_apply_btn} onClick={handleApply}>
                APPLY
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Profile_details;
