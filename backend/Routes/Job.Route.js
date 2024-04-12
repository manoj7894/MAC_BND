const jobRoutes = require("express").Router();

const { create, get, update, remove, getAll, } = require("../controller/Job.controller");
const upload = require("../middleware/fileUploadMiddleware")

jobRoutes.post("create-job", create);

jobRoutes.get("get-job/:id", get);

jobRoutes.get("All-jobs", getAll);

// jobRoutes.update("create-job", create);

// jobRoutes.delete("create-job", create);

module.exports = jobRoutes;
