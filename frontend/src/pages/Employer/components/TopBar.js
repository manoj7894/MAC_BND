import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import layout from './RecruiterLayout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMicrophone, faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import Loader from '../../Common-Components/Loaders/Loader';
import { VscSettings } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { io } from "socket.io-client"
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import NotificationBox from "../../Common-Components/NotificationBox";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
export default function TopBar() {
  const socket = io("http://localhost:8080");
  const { email } = useSelector((state) => state.Assessment.currentUser);
  const [notificationCount, setNotificationCount] = useState(0);
  const [ToggleNotification, SetToggleNotification] = useState(false);
  // const [loading, setLoading] = useState(false)
  // const [jobs, setJobs] = useState([]);
  // const [filteredJobs, setFilteredJobs] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const navigateTo = useNavigate()

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       setLoading(true)
  //       const response = await axios.get('http://localhost:8080/api/jobs/All-jobs');
  //       setJobs(response.data.jobs);
  //       setFilteredJobs(response.data.jobs);
  //       setLoading(false)
  //     } catch (error) {
  //       console.error("Error: ", error);
  //     }
  //   };
  //   fetchJobs();
  // }, []);

  // Filter jobs based on search term
  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   setSearchTerm(searchTerm);

  //   const filteredJobs = jobs.filter((job) => {
  //     return (
  //       job.title.toLowerCase().includes(searchTerm) ||
  //       job.description.toLowerCase().includes(searchTerm)
  //     );
  //   });
  //   setFilteredJobs(filteredJobs);
  // };

  // !Load Notifications

  const LoadNotifications = () => {
    axios.get(`${baseUrl}/user/notifications/get-notification/${email}`).then((response) => {
      if (response.data.success) {
        setNotificationCount(response.data.notification.filter((data) => data.notificationStatus.toLowerCase() === 'Unread'.toLowerCase()).length);
      } else {
        setNotificationCount(0);
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    socket.emit("userConnect", JSON.stringify({ userEmail: email }));
    LoadNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("receiveNotification", (data) => {
      axios.post(`${baseUrl}/user/notifications/save-notification`, JSON.parse(data)).then((response) => {
        if (response.data.success) {
          LoadNotifications()
        }
      }).catch((error) => {
        console.log(error)
      })
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  return (
    <>
      <div className={layout.__topbar}>
        <div className={layout.__searchbar}>
          <FontAwesomeIcon className={layout.__topbar_Icon} icon={faMagnifyingGlass} />
          <input className={layout.__input} type="text" placeholder='search by keyword......'
          // value={searchTerm} 
          // onChange={handleSearch} 
          />
          <FontAwesomeIcon className={layout.__topbar_Icon} icon={faMicrophone} />
        </div>
        <button onClick={() => navigateTo('/addemployee')} className={layout.__btn_Add_Employee}> <FontAwesomeIcon icon={faUserPlus} /> Add Employee</button>
        <VscSettings className={layout.__btn_filter} style={{ color: 'white', fontSize: '25' }} />
        <Badge color="primary" badgeContent={notificationCount}>
          <IoIosNotificationsOutline className={layout.__btn_notfication} style={{ color: 'white', fontSize: '25' }} onClick={() => SetToggleNotification(!ToggleNotification)} />
        </Badge>
      </div>
      {
        ToggleNotification && <NotificationBox notificationCounter={setNotificationCount} CbCloseNotification={SetToggleNotification} />
      }
    </>
  )
}
