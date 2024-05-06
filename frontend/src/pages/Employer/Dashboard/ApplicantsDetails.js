import React, { useEffect, useState } from 'react'
import axios from "axios";
import pages from "../Pages.module.css";
import { FaRegBookmark } from "react-icons/fa"; //not-bookmark
const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
function ApplicantsDetails({ jobData, selectedUser }) {
  const [selectedUserEmail, setSelectedUserEmail] = useState(selectedUser)
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    setUserDetails(jobData?.appliedBy?.filter((data) => data.email === selectedUserEmail))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUserEmail]);

  const handleToggleCardActive = (e, email) => {
    // set the selected user email
    setSelectedUserEmail(email);

    // Toggling the active class of userCard
    const userCard = document.querySelectorAll(".appliedUserCard");
    userCard.forEach((card) => {
      card.addEventListener("click", (e) => {
        card.classList.remove(`${pages.__active_appliedUsers}`);
        userCard.forEach((item) => {
          item.classList.remove(`${pages.__active_appliedUsers}`);
        });
        card.classList.add(`${pages.__active_appliedUsers}`);
      })
    })
  }
  const handleSeeResumeClick = (e, userEmail, userJobID) => {
    e.preventDefault();
    // update the application status of the user in the applied collection
    axios.patch(`${baseUrl}/user/My-jobs/applicationStatus/${userEmail}`, {
      applicationStatus: {
        JobStatus: 'In-Progress',
        StatusText: 'Resume Viewed',
        updatedAt: Date.now()
      },
      userJobID
    })
  }
  return (
    <div className={pages.__applicationDetailsContainer}>

      <div className={pages.__applicantDetails__ListBox}>
        {
          jobData?.appliedBy?.map((user) => {
            return (
              <div className={`appliedUserCard ${pages.__appliedUsers} ${pages.__Secondary_appliedUsers} ${user.email === selectedUser && pages.__active_appliedUsers}`} key={user._id} onClick={(e) => handleToggleCardActive(e, user.email)}>
                <div className={pages.__appliedHeader}>
                  <img className={pages.__userPF} src={user.profileImage ?? 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'} alt="" onError={(e) => { e.target.src = `https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg`; e.onError = null; }} />
                  <section>
                    <span style={{ fontSize: '20px' }}><strong>{user.name}</strong></span>
                    <p style={{ fontSize: '15px' }}>{user.biography}</p>
                  </section>
                  {/* bookmark here */}
                  <FaRegBookmark style={{ fontSize: '20px' }} />
                </div>
                <div className={pages.__appliedBody}>
                  <span>Location - <strong>{user.location}</strong></span>
                  <span>Type - <strong>{user.employmentType}</strong></span>
                </div>
                <div>
                  <h6>Skills</h6>
                  <div className={pages.__appliedSkills}>
                    {
                      user.skills?.filter((data, index) => index < 3).map((skill, index) => {
                        return (
                          <span key={skill._id}>{skill.name}</span>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={pages.__applicantDetails_Container}>
        {
          userDetails?.map((user, index) => {
            return <div className={pages.__applicantDetails} key={user._id}>
              <div className={pages.__appliedHeader}>
                  <img className={pages.__userPF} src={user.profileImage ?? 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'} alt="" onError={(e) => { e.target.src = `https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg`; e.onError = null; }} />
                  <span style={{ fontSize: '20px' }}><strong>{user.name}</strong></span>
                <FaRegBookmark className={pages.__bookmark} />
              </div>
              <p style={{ textAlign: 'justify' }}>{user.biography}</p>
              <div className={pages.__applicantPlace}>
                <span>State - <strong>{user.state}</strong></span>
                <span>Country - <strong>{user.country}</strong></span>
              </div>
              <div>
                <h6>Skills</h6>
                <div className={pages.__appliedSkills}>
                  {
                    user.skills?.map(skill => {
                      return (
                        <span key={skill._id}>{skill.name}</span>
                      )
                    })
                  }
                </div>
              </div>
              <>
                <h6>Appilcant Note :</h6>
                {user.note ?? 'N/A'}
              </>
              <div className={pages.__applicantButtons}>
                <button className={pages.__applicantBtn} onClick={(e) => handleSeeResumeClick(e, user?.email, user?.jobID)}>See Resume</button>

                <button className={pages.__applicantBtn} style={{ background: 'blue', padding: '0 4em' }}>Schedule Interview</button>
              </div>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default ApplicantsDetails




