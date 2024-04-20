import React from 'react'
import pages from "../Pages.module.css";
import { IoImageOutline } from "react-icons/io5";
import { useLocation, useParams } from 'react-router-dom';
function CreatePostPreview() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(state)

  const handleCancleButtonClick = (e)=>{
    e.preventDefault();
    window.history.back();
  }
  return (
    <div className={pages.__PostPreviewPage_Container}>
      <h1 className={pages.__PostPreviewPage_heading}>Create Post</h1>

      <div className={pages.__PostPreviewPage_PosterContainer}>
        <img src={state?.jobPoster} alt={title} className={pages.__PostPreviewPage_Poster} />
      </div>

      <div className={pages.__PostPreviewPage_PosterName_Box}>
        <span className={pages.__PostPreviewPage__imgUploaded}>
          <IoImageOutline className={pages.__PostPreviewPage__imgICON} />
          <span className={pages.__PostPreviewPage__imgUploadedText}>Image Uploaded</span>
        </span>
        <p className={pages.__PostPreviewPage_PosterName}>
          {state?.selectedImg.name}
        </p>
      </div>

      <div className={pages.__PostPreviewPage_PostDescription_Box}>
        <p className={pages.__PostPreviewPage_Description}>
          {state?.jobDescription}
        </p>

        <p className={pages.__PostPreviewPage_Description}>
          <strong>Responsibility: </strong>  {state?.responsibility}
        </p>

        <p className={`${pages.__PostPreviewPage_Description}, ${pages.__PostPreviewPage_Skils}`}>
          <strong>Skils: </strong>  <span> {state?.skilRequired}</span>
        </p>

        <p className={`${pages.__PostPreviewPage_Description}, ${pages.__PostPreviewPage_Skils}`}>
          <strong>Qualifications: </strong>  <span> {state?.education}</span>
        </p>

        <p className={`${pages.__PostPreviewPage_Description}, ${pages.__PostPreviewPage_Skils}`}>
          <strong>Experience: </strong>  <span> {state?.jobExperience} Years</span>
        </p>

        <p className={`${pages.__PostPreviewPage_Description}, ${pages.__PostPreviewPage_Skils}`}>
          <strong>Salary: </strong>  <span> {state?.salaryRange} LPA</span>
        </p>

        <p className={`${pages.__PostPreviewPage_Description}, ${pages.__PostPreviewPage_Skils}`}>
          <strong>Location: </strong>  <span> {state?.location}</span>
        </p>

      </div>

      <div className={pages.__PostPreviewPage_ButtonContainer}>
        <button type="button" className={pages.__PostPreviewPage_Buttons} onClick={handleCancleButtonClick}>Cancle</button>
        <button type="button" className={pages.__PostPreviewPage_Buttons}>Post</button>
      </div>

    </div>
  )
}

export default CreatePostPreview
