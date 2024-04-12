import React, { useRef, useState } from 'react'
import pages from '../Pages.module.css';
import toast from "react-hot-toast";
import axios from "axios"
import noImg from '../../../Assets/noImage.jpg';

export default function CreatePost() {
  const imgRef = useRef(null)
  const [post, setPost] = useState({
    jobPoster: "",
    jobTitle: "",
    jobDescription: "",
    employmentType: "",
    location: "",
    salaryRange: "",
    skilRequired: "",
    jobExperience: "",
    employeeEmail: localStorage.getItem('email')
  })
  const [selectedImg, setSelectedImg] = useState(null);
  const handleOnChange = (e) => {
    if (e.target.name === "jobPoster") {
      console.log(e.target.name);
      if (e.target.files[0].type.split("/")[0] === "image") {
        setPost({ ...post, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        setSelectedImg(e.target.files[0]);
      } else {
        toast.error("Invalid image");
      }
    } else {
      setPost({ ...post, [e.target.name]: e.target.value });
    }
  };
  const handleCreatePost = (e) => {
    e.preventDefault()
    if (post.jobPoster === "") {
      toast((t) => (<span>Select an <b>image</b> for post</span>));
    }
    else if (post.jobTitle === "" || post.jobDescription === "" || post.employmentType === "" ||
      post.location === "" || post.salaryRange === "" || post.skilRequired === "" || post.jobExperience === "") {
      // toast.error('All Fields Required !')
      toast('All Fields Required !!',
        {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
    else {
      const formData = new FormData();
      formData.set("employeeEmail", localStorage.getItem("email"));
      formData.append("jobPoster", selectedImg);
      formData.append("jobTitle", post.jobTitle);
      formData.append("jobDescription", post.jobDescription);
      formData.append("employmentType", post.employmentType);
      formData.append("location", post.location);
      formData.append("salaryRange", post.salaryRange);
      formData.append("skilRequired", post.skilRequired);
      formData.append("jobExperience", post.jobExperience);
      axios.post("http://localhost:8080/api/jobs/create-job", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            toast.success("Post created successfully");
            setPost({
              jobPoster: "",
              jobTitle: "",
              jobDescription: "",
              employmentType: "",
              location: "",
              salaryRange: "",
              skilRequired: "",
              jobExperience: ""
            });
            setSelectedImg("");
          } else {
            toast.error("Try again");
            setPost({
              jobPoster: "",
              jobTitle: "",
              jobDescription: "",
              employmentType: "",
              location: "",
              salaryRange: "",
              skilRequired: "",
              jobExperience: ""
            });
            setSelectedImg(null);
          }
        })
        .catch((err) => {
          toast.error(`${err.message}`);
          setPost({
            jobPoster: "",
            jobTitle: "",
            jobDescription: "",
            employmentType: "",
            location: "",
            salaryRange: "",
            skilRequired: "",
            jobExperience: ""
          });
          setSelectedImg(null)
        });
    }
  }

  return (
    <div className={pages.__create_Post_Page}>
      <header className={pages.__create_Post_Header}>
        <h1 style={{ fontSize: '30px' }}>Create Post</h1>
      </header>

      <div className={pages.__postDetails}>
        <div className={pages.__imgContainer}>
          <img className={pages.__previewImg} src={post.jobPoster} alt="preview img"
            onError={(e) => {
              e.target.src = `${noImg}`
              e.onError = null
            }} />
          <label htmlFor="">drop your image here or <span style={{color:"blue", fontWeight:"700", cursor:"pointer"}} onClick={(e)=> imgRef.current.click()}>browse</span></label>
          <input type="file" accept='image/*' ref={imgRef} hidden name='jobPoster' onChange={handleOnChange} />
        </div>

        <form className={pages.__createPost_Form} onSubmit={(e) => e.preventDefault()}>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Job Title</label> <br />
            <input type="text" name='jobTitle' value={post.jobTitle} className={pages.__inputs} onChange={handleOnChange} />
          </div>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Job Description</label> <br />
            <input type="text" name='jobDescription' value={post.jobDescription} className={pages.__inputs} onChange={handleOnChange} />
          </div>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Employment Type</label> <br />
            <input type="text" name='employmentType' value={post.employmentType} className={pages.__inputs} onChange={handleOnChange} />
          </div>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Location</label> <br />
            <input type="text" name='location' value={post.location} className={pages.__inputs} onChange={handleOnChange} />
          </div>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Salary Range (INR)</label> <br />
            <input type="text" name='salaryRange' value={post.salaryRange} className={pages.__inputs} onChange={handleOnChange} />
          </div>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Skill Required</label> <br />
            <input type="text" name='skilRequired' value={post.skilRequired} className={pages.__inputs} onChange={handleOnChange} />
          </div>
          <div className={pages.__input_Grps}>
            <label htmlFor="">Job Experince</label> <br />
            <input type="text" name='jobExperience' value={post.jobExperience} className={pages.__inputs} onChange={handleOnChange} />
          </div>
        </form>
      </div>

      <div className={pages.__buttons}>
        <button className={pages.__btn_Cancel}>Cancel</button>
        <button className={pages.__btn_Save} onClick={handleCreatePost}>Save & Preview</button>
      </div>

    </div>
  )
}
