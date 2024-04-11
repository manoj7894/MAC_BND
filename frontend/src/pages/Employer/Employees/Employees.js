import React from 'react'
import pages from '../Pages.module.css';
import { NavLink, Outlet } from 'react-router-dom'

export default function Employees() {
  return (
    <div>
      <nav className={pages.__employee_ToggleNav}>
        <NavLink className={pages.__employee_Links} to='/recruiter/employees/on time'>
          <div className={pages.__employee_Links_Toggles}>
            <h1>360</h1>
            <div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>On Time</p>
              <div style={{ fontSize: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>  <div className='__employee_PresenceColor' /> -10% Less than yesterday</div>
            </div>
          </div>
        </NavLink>
        <NavLink className={pages.__employee_Links} to='/recruiter/employees/absent'>
          <div className={pages.__employee_Links_Toggles}>
            <h1>30</h1>
            <div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>Absent</p>
              <div style={{ fontSize: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>  <div className='__employee_PresenceColor' /> +3% Increase than yesterday</div>
            </div>
          </div>
        </NavLink>
        <NavLink className={pages.__employee_Links} to='/recruiter/employees/late arrivals'>
          <div className={pages.__employee_Links_Toggles}>
            <h1>62</h1>
            <div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>Late Arrivals</p>
              <div style={{ fontSize: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>  <div className='__employee_PresenceColor' /> +3% Increase than yesterday</div>
            </div>
          </div>
        </NavLink>
        <NavLink className={pages.__employee_Links} to='/recruiter/employees/leave requests'>
          <div className={pages.__employee_Links_Toggles}>
            <h1>6</h1>
            <div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>Leave Requests</p>
              <div style={{ fontSize: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>  <div className='__employee_PresenceColor' /> -10% Less than yesterday</div>
            </div>
          </div>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
