import React, { useState } from 'react'
import interview from './Interview.module.css'
import InterviewSchedule from './InterviewSchedule'
import InterviewWithAI from './InterviewWithAI'
import user from '../../../Assets/user.png'

export default function Interviews() {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className={interview.__interviewSchedule_Page}>
      <section className={interview.__left_Cont}>
        <div className={interview.__toogleContainer}>
          <button className={`${interview.__btn_toggle} ${toggle ? interview.active : ''}`} onClick={handleToggle}>Interview</button>
          <button className={`${interview.__btn_toggle} ${!toggle ? interview.active : ''}`} onClick={handleToggle}>Interviews with AI</button>
        </div>
        {toggle ? <InterviewSchedule /> : <InterviewWithAI />}
      </section>

      <section className={interview.__right_Cont}>
        <div className={interview.__user_Profile}>
          <img className={interview.__user_Img} src={user} alt="" />
          <h4>Samarth Patel</h4>
          <p>Product Designer</p>
          <button className={interview.__btn_Edit_Profile}>Edit Profile</button>
        </div>
        <div className={interview.__user_Details}>
          <h4>Experience</h4>
          <p>1 year 8 months</p>
          <h5>Skills and Expertise</h5>
          <p className={interview.__user_skills}>
            <span>UI Designer</span>
            <span>UI Designer</span>
            <span>User Research</span>
            <span>Animation</span>
            <span>Landing Page</span>
            <span>Figma</span>
            <span>Landing Page</span>
            <span>Figma</span>
            <span>Landing Page</span>
            <span>Figma</span>
            <span>Landing Page</span>
            <span>Figma</span>
          </p>
          <button className={interview.__btn_View_Profile}>View Profile</button>
        </div>
      </section>
    </div>
  );
}
