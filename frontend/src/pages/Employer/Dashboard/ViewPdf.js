import React, { useEffect, useState } from "react";
import pageStyle from "./HrDashboard.module.css";
import { GiTireIronCross } from "react-icons/gi";
import axios from "axios";
import Loader from "../../Common-Components/Loaders/Loader";
function ViewPdf({ CbTogglePDF, SelectedResume }) {
  const [resumeError, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/${SelectedResume?.userResume?.path}`)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [SelectedResume.userResume?.path]);
  
  return (
    <section className={pageStyle.__viewPDF_mainContainer}>
        <GiTireIronCross
          onClick={() => CbTogglePDF(false)}
          className={pageStyle.__viewPDF_CloseButton}
        />
      <div className={pageStyle.__viewPDFBox}>
        {Loading ? (
          <Loader />
        ) : (
          <>
            {resumeError ? (
              <p className={pageStyle.__viewPDF_errorMSG}>
                No Resume Available
              </p>
            ) : (
              <iframe
                id={pageStyle.__viewPDF}
                src={`http://localhost:8080/${SelectedResume?.userResume?.path}`}
                width="100%"
                height="100%"
                title="user-resume"
                frameborder="0"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ViewPdf;
