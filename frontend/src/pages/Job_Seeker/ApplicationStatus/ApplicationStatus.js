import React, { useEffect, useState } from "react";
import ApplicationStyle from "./Application.module.css";
import { CalculateTimeAgo } from "../../Common-Components/TimeAgo";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { GiProgression } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineCheck } from "react-icons/md";
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
            {" "}
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
  const { email } = useSelector((state) => state.Assessment.currentUser);
  const [IsLoading, setLoading] = useState(false);
  const [appliedJOB, setAppliedJOB] = useState([]);
  const { status } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/user/My-jobs/get/apply-job/${email}`)
      .then((response) => {
        if (response.data.success) {
          setAppliedJOB(response.data.appliedJob);
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

  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <>
          {appliedJOB?.length > 0 ? (
            <>
              {appliedJOB.map((item) => {
                return (
                  <div className={ApplicationStyle.company_box} key={item._id}>
                    <div className={ApplicationStyle.saved_job_box}>
                      <div className={ApplicationStyle.company_job_profile}>
                        <img src={item.jobPoster} alt="comp_logo" />
                        <div className={ApplicationStyle.job_position}>
                          <h5>{item.jobTitle}</h5>
                          <span
                            style={{
                              margin: "5px 0px",
                              display: "block",
                              color: "grey",
                              fontWeight: "600",
                              fontSize: "14px",
                            }}
                          >
                            Applied <CalculateTimeAgo time={item.createdAt} />
                          </span>
                        </div>
                      </div>
                      <div className={ApplicationStyle.lpa_box}>
                        <i
                          className="fa-solid fa-money-check-dollar"
                          style={{ color: "#067418" }}
                        ></i>
                        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {item.salaryRange}{" "}
                        </span>
                        <span style={{ color: "#9595b4", fontSize: "14px" }}>
                          LPA
                        </span>
                      </div>

                      <div className={ApplicationStyle.apply_box}>
                        <button className={ApplicationStyle.btn_applied}>
                          View Status
                        </button>
                      </div>

                    </div>

                    <div className={ApplicationStyle.location_box}>
                      <div className={ApplicationStyle.req_1}>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "black" }}
                        ></i>

                        {item.location}
                      </div>
                      <div className={ApplicationStyle.req_1}>
                        <div>
                          <i
                            className="fa-solid fa-envelope-open-text"
                            style={{ color: "black" }}
                          ></i>
                        </div>
                        {item.jobExperience}
                      </div>
                      <div className={ApplicationStyle.req_1}>
                        <div>
                          <i
                            className="fa-solid fa-droplet"
                            style={{ color: "black" }}
                          ></i>
                        </div>
                        {item.employmentType}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default ApplicationStatus;
export { Status };
