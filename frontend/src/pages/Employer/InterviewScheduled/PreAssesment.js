import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CodingQuestionForm from "./CodingQuestionForm";
import CodingQuestion from "./CodingQuestion";
import axios from "axios";
import PreAssesmentStyle from "./InterviewScheduled.module.css";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const PreAssesment = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the backend when the component mounts
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${baseUrl}/coding/`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleQuestionAdded = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  // Aptitude question logic
  const [mcqs, setMCQs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  useEffect(() => {
    fetchMCQs();
  }, []);

  const fetchMCQs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/aptitude/`);
      const data = response.data;
      setMCQs(data);
    } catch (error) {
      console.error("Error fetching MCQs:", error);
    }
  };

  const [editingMCQId, setEditingMCQId] = useState(null);

const handleEdit = async (mcqId) => {
  try {
    const response = await axios.patch(`${baseUrl}/aptitude/${mcqId}`);
    const mcqToEdit = response.data;
    setNewQuestion(mcqToEdit.question);
    setOptions(mcqToEdit.options);
    setEditingMCQId(mcqId); // Set the ID of the MCQ being edited
    setShowModal(true);
  } catch (error) {
    console.error("Error fetching MCQ for editing:", error);
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    if (editingMCQId) {
      // If editingMCQId is set, update the existing MCQ
      await axios.patch(`${baseUrl}/aptitude/${editingMCQId}`, {
        question: newQuestion,
        options: options,
        correctAnswer: options[0], // Assuming correct answer is always the first option
      });
      // Logic to update the MCQ in state or refetch all MCQs
    } else {
      // If editingMCQId is not set, add a new MCQ
      const response = await axios.post(`${baseUrl}/aptitude/`, {
        question: newQuestion,
        options: options,
        correctAnswer: options[0],
      });
      const newMCQ = response.data;
      setMCQs([...mcqs, newMCQ]); // Update the state with the new MCQ
    }
    // Clear inputs and close modal
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setEditingMCQId(null); // Reset editingMCQId after submission
    setShowModal(false);
  } catch (error) {
    console.error("Error adding/editing MCQ:", error);
  }
};


  const handleDelete = async (mcqId) => {
    // Logic to delete the MCQ from the backend
    try {
      await axios.delete(`${baseUrl}/aptitude/${mcqId}`);
      // Update the state to remove the deleted MCQ
      setMCQs(mcqs.filter((mcq) => mcq._id !== mcqId));
    } catch (error) {
      console.error("Error deleting MCQ:", error);
    }
  };

  return (
    <>
      <div className={PreAssesmentStyle.pre_asssesment_container}>
        <div className={PreAssesmentStyle.coding_round_container}>
          <div className={PreAssesmentStyle.rounds_heading}>Coding Round</div>

          <div className={PreAssesmentStyle.question_container}>
            {questions.map((question, index) => (
              <div key={question._id} className={PreAssesmentStyle.question}>
                <div className={PreAssesmentStyle.question_number}>
                  Question no .{index + 1}
                </div>
                <CodingQuestion question={question} />
              </div>
            ))}
          </div>

          <div className={PreAssesmentStyle.add_btn_container}>
            <CodingQuestionForm onSubmit={handleQuestionAdded} />
          </div>
        </div>

        <div className={PreAssesmentStyle.aptitude_round_container}>
          <div className={PreAssesmentStyle.rounds_heading}>Aptitude Round</div>

          <div className={PreAssesmentStyle.aptitude_heading_container}>
            <div
              className={
                PreAssesmentStyle.aptitude_round_question_option_heading
              }
            >
              Question
            </div>
            <div
              className={
                PreAssesmentStyle.aptitude_round_question_option_heading
              }
            >
              Option
            </div>
          </div>

          <div>
            {mcqs.map((mcq, index) => (
              <div key={index}>
                <div
                  className={PreAssesmentStyle.aptitude_round_flex_container}
                >
                  <div>
                    <div
                      className={
                        PreAssesmentStyle.aptitude_round_question_container_first_question
                      }
                    >
                      <div
                        className={
                          PreAssesmentStyle.aptitude_round_question_number
                        }
                      >
                        Question no. {index + 1}
                      </div>
                      <div
                        className={PreAssesmentStyle.aptitude_round_question}
                      >
                        {mcq.question}
                      </div>
                    </div>
                  </div>
                          
                  <div>
                    <div
                      className={
                        PreAssesmentStyle.aptitude_round_option_container_first_option
                      }
                    >
                      <ol type="A">
                        {mcq.options.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
                <div>
               <Button variant="warning" onClick={() => handleEdit(mcq._id)}>Edit</Button>
               <Button variant="danger" onClick={() => handleDelete(mcq._id)}>Delete</Button>
              </div>
              </div>
          
            ))}

            <div className={PreAssesmentStyle.add_btn_container}>
              <Button
                className={PreAssesmentStyle.add_btn}
                onClick={() => setShowModal(true)}
              >
                ADD +
              </Button>
            </div>
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add MCQ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="question">
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                </Form.Group>
                {options.map((option, index) => (
                  <Form.Group controlId={`option${index}`} key={index}>
                    <Form.Label>Option {index + 1}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Enter option ${index + 1}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index] = e.target.value;
                        setOptions(newOptions);
                      }}
                    />
                  </Form.Group>
                ))}
                <div>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </div>

        <div className={PreAssesmentStyle.form_action_btn_container}>
          <div className={PreAssesmentStyle.cancel_btn_container}>
            <Button className={PreAssesmentStyle.cancel_btn}>CANCEL</Button>
          </div>

          <div className={PreAssesmentStyle.submit_btn_container}>
            <Button className={PreAssesmentStyle.submit_btn}>SUBMIT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreAssesment;
