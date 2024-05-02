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
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
// import TimeAgo from "../../Common-Components/TimeAgo.js"
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
  const { status } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/user/My-jobs/get/apply-job/${email}`)
      .then((response) => {
        if (response.data.success) {
          setAppliedJOB(response.data.appliedJob);
          setFilterAppliedJOB(response.data.appliedJob.filter((data) => data.applicationStatus.some((status) => status.JobStatus.toLowerCase() === pathname.split("/")[2].toLowerCase())));
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
                    `}> View Status</button>
                    </div>
                  </div>

                  <div className={ApplicationStyle.JobStatus_Card_BOX_BOTTOM}>

                  </div>

                </div>;
              })}
            </>
          ) : (
            <>
              {
                status === "In-Progress" && <p className={ApplicationStyle.NoDataMsg}>You haven't applied for any job yet. <Link to={'/dashboard'} className={ApplicationStyle.SearchJobsButton}>Search Jobs</Link></p>
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
    </>
  );
}

export default ApplicationStatus;
export { Status };
