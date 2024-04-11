import layout from './RecruiterLayout.module.css';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import user from '../../../Assets/user.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse, faUsers, faUser, faChartSimple, faRobot, faCalendarDays, faGear, faMoneyBill1Wave,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive'
import toast, { Toaster } from 'react-hot-toast';

export default function HR_Navbar() {
  const navigateTo = useNavigate()
  const [tabletView, setTabletView] = useState()
  const tabScreen = useMediaQuery({ maxWidth: 950 })
  const name = localStorage.getItem("name");
  const handleLogout = () => {
    localStorage.clear();
    toast.success('successfully logged out !')
    setTimeout(() => {
      navigateTo('/user-login');
    }, 1000);
  };

  useEffect(() => {
    setTabletView(tabScreen)
  }, [tabScreen])

  const toggleText = () => (tabletView ? "HCP" : "HRCONNECT PRO")

  return (
    <div className={layout.__navbar_Page}>
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className={layout.__nav_Logo} onClick={() => navigateTo('/recruiter/hr_dashboard')}>{toggleText()}</h2>
      <nav className={layout.__navbar}>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/hr_dashboard'> <FontAwesomeIcon icon={faHouse} /> <span className={layout.__hide}>Dashboard</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/create_post'><FontAwesomeIcon icon={faUser} /> <span className={layout.__hide}>Create Post</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/employees'> <FontAwesomeIcon icon={faUsers} /> <span className={layout.__hide}>Employees</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/payroll'><FontAwesomeIcon icon={faMoneyBill1Wave} /> <span className={layout.__hide}>Payroll</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/analytics'><FontAwesomeIcon icon={faChartSimple} /> <span className={layout.__hide}>Analytics</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/candidates'><FontAwesomeIcon icon={faUser} /> <span className={layout.__hide}>Candidates</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/interview_scheduled'> <FontAwesomeIcon icon={faCalendarDays} /> <span className={layout.__hide}>Interview Scheduled</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/chatbot'><FontAwesomeIcon icon={faRobot} /> <span className={layout.__hide}>Chatbot</span> </NavLink>
        <NavLink className={({isActive}) => isActive ? layout.active : layout.__navbar_Links} to='/recruiter/Setting'><FontAwesomeIcon icon={faGear} /> <span className={layout.__hide}>Setting</span> </NavLink>
      </nav>

      <div className={layout.__nav_footer_actions}>
        <div className={layout.__user_Info}>
          <img className={layout.__user_Img} title='Profile' src={user} alt='' />
          <div className={layout.__userSection}>
            Saptarsi Mitra {name}
            <button className={layout.__btn_Edit_Profile}>EDIT MY PROFILE</button>
          </div>
        </div>
        <button className={layout.__btn_Logout} onClick={() => handleLogout()}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> <span className={layout.__logout_Text}>Log Out</span>
        </button>
      </div>

    </div>
  )
}
