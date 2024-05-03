import React, { useEffect, useState } from "react";
import ApplicationStyle from "./Application.module.css";
import { CalculateTimeAgo } from "../../Common-Components/TimeAgo";
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams, } from "react-router-dom";
import { GiProgression } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineCheck } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import axios from "axios";
import Loader from "../../Common-Components/Loaders/Loader";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import locationICON from "../../../Assets/ep_location.png";
import expICON from "../../../Assets/mdi_book-education-outline.png";
import empTypeICON from "../../../Assets/Vector.png";
import inProgressICON from "../../../Assets/inProgress__IMG.png";
import ShortListedICON from "../../../Assets/Shorlisted_img.png";
import NOTShortListedICON from "../../../Assets/NOTShorlisted_img.png";
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;


function ApplicationStatus() {
  const { pathname } = useLocation();
  const navigateTO = useNavigate();

  useEffect(() => {
    if (pathname === "/application") {
      navigateTO(`/application/${"In-Progress"}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className={ApplicationStyle.ApplicationStatus__mainContainer}>
      <nav className={ApplicationStyle.ApplicationStatus__navBar}>
        <NavLink
          to={"/application/In-Progress"}
          className={({ isActive }) =>
            isActive
              ? ApplicationStyle.active
              : ApplicationStyle.ApplicationStatus__navBar_Item
          }
        >
          <GiProgression
            className={ApplicationStyle.ApplicationStatus__navBar_Item_ICON}
          />
          In-Progress
        </NavLink>

        <NavLink
          to={"/application/Shortlisted"}
          className={({ isActive }) =>
            isActive
              ? ApplicationStyle.active
              : ApplicationStyle.ApplicationStatus__navBar_Item
          }
        >
          <span
            className={ApplicationStyle.ApplicationStatus__navBar_Item_ICON_Box}
          >
            <MdOutlineCheck />
          </span>
          Shortlisted
        </NavLink>

        <NavLink
          to={"/application/Not-Shortlisted"}
          className={({ isActive }) =>
            isActive
              ? ApplicationStyle.active
              : ApplicationStyle.ApplicationStatus__navBar_Item
          }
        >
          <span
            className={
              ApplicationStyle.ApplicationStatus__navBar_Item_ICON_SecondaryBox
            }
          >
            <RxCross2 />
          </span>
          Not-Shortlisted
        </NavLink>
      </nav>

      <div className={ApplicationStyle.__outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}

function Status() {
  const { pathname } = useLocation();
  const { email } = useSelector((state) => state.Assessment.currentUser);
  const [IsLoading, setLoading] = useState(false);
  const [appliedJOB, setAppliedJOB] = useState([]);
  const [FilterAppliedJOB, setFilterAppliedJOB] = useState([]);
  const [SelectedJobStatus, setSelectedJobStatus] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { status } = useParams();

  const handleViewStatusClick = (e, jobStatus) => {
    e.preventDefault();
    setSelectedJobStatus(jobStatus)
    setShowPopup(true)
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/user/My-jobs/get/apply-job/${email}`)
      .then((response) => {
        if (response.data.success) {
          setAppliedJOB(response.data.appliedJob);
          setFilterAppliedJOB(response.data.appliedJob.filter((data) => data.applicationStatus.some((statusData) => statusData.JobStatus.toLowerCase() === pathname.split("/")[2].toLowerCase())));
          setLoading(false);
        } else {
          setAppliedJOB([]);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`Something went wrong : ${error.message}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filterJob = appliedJOB?.filter((data) => data.applicationStatus.some((status) => status.JobStatus.toLowerCase() === pathname.split("/")[2].toLowerCase()));
    setFilterAppliedJOB(filterJob)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <>
          {FilterAppliedJOB?.length > 0 ? (
            <>
              {FilterAppliedJOB?.map((data, index) => {
                return <div key={data._id + index} className={ApplicationStyle.JobStatus_Card_BOX}>

                  <div className={ApplicationStyle.JobStatus_Card_BOX_TOP}>

                    <div className={ApplicationStyle.CardBox_jobProfileBox}>
                      <div className={ApplicationStyle.CardBox_jobPoster}>
                        <img src={data?.jobPoster} alt={`${data?.jobTitle}-Poster`} width={'100%'} height={"100%"} />
                      </div>
                      <p className={ApplicationStyle.CardBox_JObTitle}>
                        <span className={ApplicationStyle.CardBox_Title}>{data.jobTitle.slice(0, 24)}...</span>
                        Applied <CalculateTimeAgo time={data.createdAt} />
                      </p>
                    </div>

                    <p className={ApplicationStyle.CardBox_jobSalaryRange}>
                      <FcMoneyTransfer className={ApplicationStyle.CardBox_jobSalaryRangeICON} /> {data.salaryRange} LPA
                    </p>

                    <div className={ApplicationStyle.CardBox_job_ButtonContainer}>
                      {
                        pathname !== "/application/In-Progress" && <button type="button" className={`${ApplicationStyle.CardBox_job_Buttons} ${ApplicationStyle.CardBox_job_FeedbackButton}`}>View Feedback</button>
                      }

                      <button type="button" className={`${ApplicationStyle.CardBox_job_Buttons} ${pathname === "/application/In-Progress" && ApplicationStyle.CardBox_job_Buttons_InProgress} ${pathname === "/application/Shortlisted" && ApplicationStyle.CardBox_job_Buttons_shortListed} ${pathname === "/application/Not-Shortlisted" && ApplicationStyle.CardBox_job_Buttons_NOTshortListed}
                    `} onClick={(e) => handleViewStatusClick(e, data.applicationStatus)}> View Status</button>
                    </div>
                  </div>

                  <div className={ApplicationStyle.JobStatus_Card_BOX_BOTTOM}>
                    <p className={ApplicationStyle.CardBox__InfoBox}>
                      <img src={locationICON} alt="ICON" className={ApplicationStyle.CardBox__jobInfoICON} />
                      {data?.location}
                    </p>

                    <p className={ApplicationStyle.CardBox__InfoBox}>
                      <img src={expICON} alt="ICON" className={ApplicationStyle.CardBox__jobInfoICON} />
                      {data?.jobExperience}
                    </p>

                    <p className={ApplicationStyle.CardBox__InfoBox}>
                      <img src={empTypeICON} alt="ICON" className={ApplicationStyle.CardBox__jobInfoICON} />
                      {data?.employmentType}
                    </p>

                  </div>

                </div>;
              })}
            </>
          ) : (
            <>
              {
                status === "In-Progress" && <p className={ApplicationStyle.NoDataMsg}>You don't have any applications currently in progress. <Link to={'/dashboard'} className={ApplicationStyle.SearchJobsButton}>Search Jobs</Link></p>
              }
              {
                status === "Shortlisted" && <p className={ApplicationStyle.NoDataMsg}>No applications shortlisted yet <Link to={'/application/In-Progress'} className={ApplicationStyle.SearchJobsButton}>Check Status</Link></p>
              }
              {
                status === "Not-Shortlisted" && <p className={ApplicationStyle.NoDataMsg}>You haven't received any rejections for your applications.<Link to={'/application/In-Progress'} className={ApplicationStyle.SearchJobsButton}>Check Status</Link></p>
              }

            </>
          )}
        </>
      )}

      {
        showPopup && <StatusPopup popupType={status} CbTogglePopup={setShowPopup} jobStatus={SelectedJobStatus} />
      }

    </>
  );
}

function StatusPopup({ popupType, CbTogglePopup, jobStatus }) {
  const navigateTO = useNavigate();

  const calculateDate = (dateString) => {
    if (dateString) {
      const monthObj = {
        1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"
      }
      const date = new Date(dateString);
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return <span className={ApplicationStyle.Status__poupBox_date}>{day >= 10 ? '0' + day : day} {monthObj[month]} </span>
    }

  }

  return <div className={ApplicationStyle.Status__poupMainContainer}>
    <div className={ApplicationStyle.Status__poupBox}>
      <h2 className={ApplicationStyle.Status__poupBox_Heading}>Your Application status</h2>

      {
        popupType === "In-Progress" && <>
          <div className={`${ApplicationStyle.Status__poupBox_PosterBox} ${ApplicationStyle.Status__poupBox_InProgress_PosterBox}`}>
            <img src={inProgressICON} alt="Application-In-Progress" className={`${ApplicationStyle.Status__poupBox_Poster} `} />
          </div>
          <h3 className={ApplicationStyle.Status__poupBox_SecondaryHeading}>We're reviewing your application </h3>
          <h4 className={ApplicationStyle.Status__poupBox_TertiaryHeading}>Thanks for applying. We'll review and consider your application. You can check back later to see how things are going. </h4>
        </>
      }

      {
        popupType === "Shortlisted" && <>

          <div className={`${ApplicationStyle.Status__poupBox_PosterBox} ${ApplicationStyle.Status__poupBox_Shortlisted_PosterBox}`}>
            <img src={ShortListedICON} alt="Application-Shortlisted" className={`${ApplicationStyle.Status__poupBox_Poster} ${ApplicationStyle.Status__poupBox_SecondaryPoster}`} />
          </div>
          <h3 className={ApplicationStyle.Status__poupBox_SecondaryHeading}>Congratulations you are shortlisted</h3>
          <h4 className={ApplicationStyle.Status__poupBox_TertiaryHeading}>You're one step closer to joining our team. We have a few more steps in our hiring process.</h4>
        </>
      }


      {
        popupType === "Not-Shortlisted" && <>
          <div className={`${ApplicationStyle.Status__poupBox_PosterBox} ${ApplicationStyle.Status__poupBox_Not_Shortlisted_PosterBox}`}>
            <img src={NOTShortListedICON} alt="Application-Shortlisted" className={`${ApplicationStyle.Status__poupBox_Poster} ${ApplicationStyle.Status__poupBox_SecondaryPoster}`} />
          </div>
          <h3 className={ApplicationStyle.Status__poupBox_SecondaryHeading}>We're reviewing your application We've decided not to move forward with your application.</h3>
          <h4 className={ApplicationStyle.Status__poupBox_TertiaryHeading}>Our decision was based on the qualifications of other candidates. We appreciate your interest and encourage you to apply for other positions at our company.</h4>
        </>
      }

      <ul className={ApplicationStyle.Status__poupBox_StatusTimeLineList}>
        <li className={`${ApplicationStyle.Status__StatusTimeLineListItem} ${jobStatus?.some((data) => data.StatusText === 'Applied') && ApplicationStyle.completedStep}`}>Applied{calculateDate(jobStatus.filter((data) => data.StatusText === 'Applied')[0]?.updatedAt)}</li>

        <li className={`${ApplicationStyle.Status__StatusTimeLineListItem} ${jobStatus?.some((data) => data.StatusText === 'Application Sent') ? ApplicationStyle.completedStep : ApplicationStyle.NOTcompletedStep}`}>Application Sent{calculateDate(jobStatus.filter((data) => data.StatusText === 'Application Sent')[0]?.updatedAt)}</li>

        <li className={`${ApplicationStyle.Status__StatusTimeLineListItem} ${jobStatus?.some((data) => data.StatusText === 'Application Viewed') ? ApplicationStyle.completedStep : ApplicationStyle.NOTcompletedStep}}`}>Application Viewed{calculateDate(jobStatus.filter((data) => data.StatusText === 'Application Viewed')[0]?.updatedAt)}</li>

        <li className={`${ApplicationStyle.Status__StatusTimeLineListItem} ${jobStatus?.some((data) => data.StatusText === 'Resume Viewed') ? ApplicationStyle.completedStep : ApplicationStyle.NOTcompletedStep}}`}>Resume Viewed{calculateDate(jobStatus.filter((data) => data.StatusText === 'Resume Viewed')[0]?.updatedAt)}</li>

        <li className={`${ApplicationStyle.Status__StatusTimeLineListItem}`}>Waiting for recruiter</li>
      </ul>

      <button className={ApplicationStyle.Status_popupbuttons} onClick={() => CbTogglePopup(false)}>OK, GOT IT</button>
      <button className={ApplicationStyle.Status_popupbuttons} onClick={() => navigateTO("/dashboard")} >Browse jobs at HRConnect</button>
      <span className={ApplicationStyle.Status_popupBottomMSG}>HR Connect  is proud to be an equal opportunity workplace and is an affirmative action employer</span>
    </div>

  </div>
}



export default ApplicationStatus;
export { Status };