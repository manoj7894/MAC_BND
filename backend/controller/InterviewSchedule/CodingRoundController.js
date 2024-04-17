const Question = require("../../model/InterviewSchedule/CodingRoundModel");

const getAllCodingQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific question
const getSpecificCodingQuestions = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a question
const createCodingQuestions = async (req, res) => {
  const question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    company: req.body.company,
  });
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a question
const updateCodingQuestions = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Question not found" });
    }
    if (req.body.question != null) {
      question.question = req.body.question;
    }
    if (req.body.answer != null) {
      question.answer = req.body.answer;
    }
    if (req.body.company != null) {
      question.company = req.body.company;
    }
    const updatedQuestion = await question.save();
    res.json({ message: "Question updated", updatedQuestion });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Delete a question
const deleteCodingQuestions = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Question not found" });
    }
    await Question.deleteOne({ _id: req.params.id });
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  getAllCodingQuestions,
  getSpecificCodingQuestions,
  createCodingQuestions,
  updateCodingQuestions,
  deleteCodingQuestions,
};
