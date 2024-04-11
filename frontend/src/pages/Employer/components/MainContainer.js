import React, { useEffect } from 'react'
import HrNavbar from './HrNavbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import TopBar from './TopBar'
import layout from './RecruiterLayout.module.css';


export default function MainContainer() {
  const navigateTo = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/recruiter')
      navigateTo('/recruiter/hr_dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className={layout.__mainContainer}>
      <HrNavbar />
      <div className={layout.__subContainer}>
        <TopBar />
        <div className={layout.__outletContainer}>
          <Outlet />
        </div>
      </div>
    </div >
  )
}
