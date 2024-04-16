const express = require("express");
const codingQuestionRouter = express.Router();
const {
  getAllCodingQuestions,
  getSpecificCodingQuestions,
  createCodingQuestions,
  updateCodingQuestions,
  deleteCodingQuestions,
} = require("../../controller/InterviewSchedule/CodingRoundController");

codingQuestionRouter.get("/", getAllCodingQuestions);
codingQuestionRouter.get("/:id", getSpecificCodingQuestions);
codingQuestionRouter.post("/", createCodingQuestions);
codingQuestionRouter.patch("/:id", updateCodingQuestions);
codingQuestionRouter.delete("/:id", deleteCodingQuestions);

module.exports = codingQuestionRouter;
