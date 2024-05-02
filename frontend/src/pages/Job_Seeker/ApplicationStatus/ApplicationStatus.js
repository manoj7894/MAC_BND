import React, { useEffect, useState } from "react";
import ApplicationStyle from "./Application.module.css";
import { CalculateTimeAgo } from "../../Common-Components/TimeAgo";
import { NavLink, Outlet, useLocation, useNavigate, useParams,} from "react-router-dom";
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
//   const { status } = useParams();

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
          {appliedJOB.length > 0 ? (
            <>
              {appliedJOB.map((data, index) => {
                return <div key={data._id + index} className={ApplicationStyle.JobStatus_Card_BOX}>

                    <div className={ApplicationStyle.JobStatus_Card_BOX_TOP}></div>
                    <div className={ApplicationStyle.JobStatus_Card_BOX_BOTTOM}></div>



                </div>;
              })}
            </>
          ) : (
            <> No data to show </>
          )}
        </>
      )}
    </>
  );
}

export default ApplicationStatus;
export { Status };
