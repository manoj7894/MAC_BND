import React from 'react'
import interview from './Interview.module.css'

export default function InterviewWithAI() {
  // const colors = [
  //   "rgba(203, 240, 251, 1)",
  //   "rgba(249, 187, 187, 1)",
  //   "rgba(225, 176, 255, 1)",
  // ];
  // style={{ backgroundColor: colors[index % colors.length] }}

  return (
    <div className={interview.__interviewWithAI_Page}>
      <h2 style={{ color: "grey" }}>My Schedule</h2>
      <div className={interview.__timeline}>
        <select className={interview.__select_Date} name="" id="">
          <option value="">Select Dates</option>
          <option value="">02 - 08 March</option>
          <option value="">09 - 15 March</option>
          <option value="">18 - 24 March</option>
          <option value="">02 - 05 April</option>
          <option value="">10 - 18 March</option>
        </select>

        <select className={interview.__select_Time} name="" id="">
          <option value="">Time</option>
          <option value="10.30">10.30 am</option>
          <option value="12.30">12.30 pm</option>
          <option value="2.45">2.45 pm</option>
          <option value="4.00">4.00 pm</option>
          <option value="5.27">5.27 pm</option>
        </select>
      </div>

      <div className={interview.__interview_Lists}>

        <div className={interview.__interview_Details} >
          <div className={interview.__Interview_Timings} style={{ backgroundColor: 'yellow' }}>
            <div className={interview.__interview_Dates}>
              UX Interview
              <p style={{ fontSize: "13px" }}>Mon - Thu</p>
            </div>
            <p className={interview.__interview_Times}>10.30 am</p>
          </div>
          <button className={interview.__btn_meet_Calls}>Join Now</button>
        </div>

        <div className={interview.__interview_Details} >
          <div className={interview.__Interview_Timings} style={{ backgroundColor: "rgb(14, 70, 253)" }}>
            <div className={interview.__interview_Dates}>
              UX Interview
              <p style={{ fontSize: "13px" }}>Mon - Thu</p>
            </div>
            <p className={interview.__interview_Times}>10.30 am</p>
          </div>
          <button className={interview.__btn_meet_Calls}>Join Now</button>
        </div>

        <div className={interview.__interview_Details} >
          <div className={interview.__Interview_Timings} style={{ backgroundColor: "rgb(255, 0, 140)" }}>
            <div className={interview.__interview_Dates}>
              UX Interview
              <p style={{ fontSize: "13px" }}>Mon - Thu</p>
            </div>
            <p className={interview.__interview_Times}>10.30 am</p>
          </div>
          <button className={interview.__btn_meet_Calls}>Join Now</button>
        </div>

      </div>

    </div>
  )
}
