import React from 'react'
import Interviewcss from './Interview.module.css'
import { IoStar } from "react-icons/io5";
import { BsPersonVideo } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdAttach } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";

function Interview() {
  return (
    <div className={Interviewcss.main_container}>

      {/* upper container of Candidate profile */}
      <div className={Interviewcss.uppercontainer}>

        <div className={Interviewcss.uppercontainer_left}>

          <img className={Interviewcss.upper_cont_img} src='https://media.creativemornings.com/uploads/user/avatar/120448/profile-circle.png' alt=''></img>

          <div className={Interviewcss.uppercontainer_left1}>
            <p>Charle Kristen</p>
            <p><IoStar className={Interviewcss.star} />4.0</p>
          </div>
        </div>
        <div className={Interviewcss.uppercontainer_right}>
          <p>Candidate ID:</p>
          <p>12345678</p>
        </div>
      </div>
      <hr className={Interviewcss.horizontal_line}></hr>

      {/* Form fill up for Candidate */}
      <div className={Interviewcss.formMain_cont}>

        <div className={Interviewcss.formMain_cont1}>

          <div className={Interviewcss.formSub_con1}>
            <label for='interview-type' className={Interviewcss.box}><BsPersonVideo />Interview type </label><br></br>
            <select id='interview-type' className={Interviewcss.boxes}>
              <option value=''></option>
              <option value='walk'>Walk-in-drive</option>
              <option value='virtual'>Virtual</option>
              <option value='face'>Face to face</option>
            </select>
          </div>
          <div className={Interviewcss.formSub_con}>
            <label for='description' className={Interviewcss.box}><GrTextAlignFull />Description</label>
            <input type='text' id='description' className={Interviewcss.description_input}></input>
          </div>
        </div>


        <div className={Interviewcss.formMain_cont2}>
          <div className={Interviewcss.formSub_con}>
            <label for='interview-date' className={Interviewcss.box}><FaRegCalendarAlt />Interview date</label>
            <input type='date' id='interview-date' className={Interviewcss.description_input}></input>
          </div>
          <div className={Interviewcss.formSub_con}>
            <label for='interview-time' className={Interviewcss.box}><MdAccessTime />Interview time</label>
            <input type='time' id='interview-time' className={Interviewcss.description_input}></input>
          </div>
        </div>

        <div className={Interviewcss.formMain_cont3}>
          <div className={Interviewcss.formSub_con}>
            <label for='interview-name' className={Interviewcss.box}><FaUser />Interviewer name</label>
            <input type='text' id='interview-name' className={Interviewcss.description_input}></input>
          </div>
          <div className={Interviewcss.formSub_con}>
            <label for='interview-loaction' className={Interviewcss.box}><IoLocationOutline />Location</label>
            <input type='location' id='interview-location' className={Interviewcss.description_input}></input>
          </div>
        </div>

      </div>

      {/* uplad file container */}
      <div>
        <p className={Interviewcss.fileupload}><IoMdAttach />Attachment</p>
        <div className={Interviewcss.filebox}>
          <IoImageOutline className={Interviewcss.imgs} />
          <p> Drop you image here or <span>browse</span></p>
          <label for='file'></label>

          <input type='file' id='file' ></input>
        </div>
      </div>
      <div style={{ paddingTop: '20px' }}>
        <button>Schedule Interview</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default Interview
