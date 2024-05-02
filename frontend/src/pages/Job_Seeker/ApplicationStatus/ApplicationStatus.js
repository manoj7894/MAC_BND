import React, { useEffect, useState } from 'react'
import ApplicationStyle from "./Application.module.css"
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { GiProgression } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineCheck } from "react-icons/md";
import axios from 'axios'
import Loader from "../../Common-Components/Loaders/Loader"
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
// import TimeAgo from "../../Common-Components/TimeAgo.js"
function ApplicationStatus() {
    const { pathname } = useLocation();
    const { email } = useSelector((state) => state.Assessment.currentUser);
    const navigateTO = useNavigate();
    const [IsLoading, setLoading] = useState(false);
    const [appliedJOB, setAppliedJOB] = useState([]);
    
    useEffect(() => {
        if (pathname === '/application') {
            navigateTO(`/application/${"In-Progress"}`, { state: { appliedJOB } })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseURL}/user/My-jobs/get/apply-job/${email}`).then((response) => {
            if (response.data.success) {
                setAppliedJOB(response.data.appliedJob)
                setLoading(false)
            } else {
                setAppliedJOB([])
                setLoading(false)
            }
        }).catch((error) => {
            setLoading(false)
            toast.error(`Something went wrong : ${error.message}`)
        })
    }, [email])
    return (
        <div className={ApplicationStyle.ApplicationStatus__mainContainer}>

            <nav className={ApplicationStyle.ApplicationStatus__navBar}>
                <NavLink to={'/application/In-Progress'} state={appliedJOB} className={({ isActive }) =>
                    isActive ? ApplicationStyle.active : ApplicationStyle.ApplicationStatus__navBar_Item}><GiProgression className={ApplicationStyle.ApplicationStatus__navBar_Item_ICON} />In-Progress</NavLink>

                <NavLink to={'/application/Shortlisted'} state={appliedJOB} className={({ isActive }) =>
                    isActive ? ApplicationStyle.active : ApplicationStyle.ApplicationStatus__navBar_Item}>
                    <span className={ApplicationStyle.ApplicationStatus__navBar_Item_ICON_Box} >
                        <MdOutlineCheck />
                    </span>
                    Shortlisted</NavLink>

                <NavLink to={'/application/Not-Shortlisted'} state={appliedJOB} className={({ isActive }) =>
                    isActive ? ApplicationStyle.active : ApplicationStyle.ApplicationStatus__navBar_Item}>
                    <span className={ApplicationStyle.ApplicationStatus__navBar_Item_ICON_SecondaryBox}>
                        <RxCross2 />
                    </span> Not-Shortlisted</NavLink>
            </nav>

            <div className={ApplicationStyle.__outletContainer}>
                {
                    IsLoading ? <Loader /> : <Outlet />
                }
            </div>

        </div>
    )
}

function Status() {
    const { status } = useParams();
    const { state } = useLocation()
    console.log(state)
    return <div>
        <p>{status}</p>
    </div>
}

export default ApplicationStatus;
export { Status };