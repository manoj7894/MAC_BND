import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Timer({ minutes, type, CbToggle, AnsweredQuestion, correctAnswer }) {
  const [seconds, setSeconds] = useState(Number(minutes) * 60);
  const navigateTo = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        if (seconds === 10) {
          toast.error("Last 15 sec left, Please submit your text otherwise no answer will be saved")
        }
}
      else {
        clearInterval(intervalId);
        if (type === "Job_Assesment") {
          navigateTo('/job-assesment-result')
        } else {
          navigateTo('/assessment-result');
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, navigateTo, type, CbToggle, AnsweredQuestion, correctAnswer]);

  const formattedTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      {formattedTime()}
    </>
  );
}

export default Timer;
