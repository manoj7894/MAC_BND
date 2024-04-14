
const myJobRoutes = require("express").Router();
const { createAppliedJob, getAppliedJob, removeAppliedJob, createSavedJob, getSavedJob, removeSavedJob } = require("../controller/MyJob.contoller")

myJobRoutes.post("/create/apply-job", createAppliedJob);
myJobRoutes.get("/get/apply-job", getAppliedJob);
myJobRoutes.delete("/delete/apply-job/:id", removeAppliedJob);




myJobRoutes.post("/create/save-job",createSavedJob);
myJobRoutes.get("/get/save-job/:email",getSavedJob);
myJobRoutes.delete("/delete/save-job/:id",removeSavedJob);


module.exports = myJobRoutes;