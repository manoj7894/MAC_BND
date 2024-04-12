import React from 'react'
import { GrNotes } from "react-icons/gr";
import ResumeCss from './MyResume.module.css'
import image from './img.png'

function MyResume() {
  return (
    <div>
      <div className={ResumeCss.upperSelection}>
        <p className={ResumeCss.button1}><GrNotes />My Resume</p>
        <p className={ResumeCss.button1}><GrNotes />Previous Resume</p>
      </div>

      <button className={ResumeCss.Update_resumeBtn}>Update Your Resume</button>

      <div className={ResumeCss.vertical_line}></div>
      <div className={ResumeCss.right_side_container}>Upload your resume ATS friendly</div>
      <img src={image} alt='#' className={ResumeCss.right_image}></img>
      <div className={ResumeCss.right_side_container2}>Check your resume score to gauge its effectiveness and suitability for potential job opportunities</div>

      <button className={ResumeCss.resume_btn}>Check your resume score</button>

    </div>
  )
}

export default MyResume
