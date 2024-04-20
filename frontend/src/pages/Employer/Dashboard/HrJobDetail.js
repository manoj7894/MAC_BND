import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const HrJobDetail = ({ jobId }) => {
  const [job, setJob] = useState(null); 

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get(`${baseUrl}/jobs/job/${jobId}`);
        const selectedJob = response.data.jobs; 
        setJob(selectedJob); 
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
  
    fetchData(); 
  }, [jobId]);

  return (
    <>
      <h1>HR Job Detail</h1>
      {job ? ( 
        <div key={job._id}>
          <h2>{job.jobTitle} needed.</h2>
          <p>{job.jobDescription}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default HrJobDetail;
