const express = require("express");
const ConnectDb = require("./config/config");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

ConnectDb();


//!  Assessments Related  Routes and import

const { assessmentRoute } = require("./routes/Assessment.Route");
const assesmentQuestionRouter = require("./Routes/AssessmentQuestion.Route");
app.use("/api/assessment", assessmentRoute);
app.use("/api/questions", assesmentQuestionRouter);



const Port = process.env.Port;
app.listen(Port, () => {
  console.log(`Express is running on ${Port}`);
});
