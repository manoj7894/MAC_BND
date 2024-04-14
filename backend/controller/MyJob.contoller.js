const { savedJobCollection, appliedJobCollection } = require("../model/MyJob.model");

const User = require("../model/users/UserModel");



const createAppliedJob = async (req, res) => { }
const getAppliedJob = async (req, res) => { }
const removeAppliedJob = async (req, res) => { }


//! Saved job related controllers
const createSavedJob = async (req, res) => {
    try {
        const { email, jobID } = req.body;
        const mongooseResponse = await savedJobCollection.create({
            jobID: jobID,
            userEmail: email
        });
        if (mongooseResponse) {
            res.status(200).json({
                success: true,
                msg: "Job saved Successfully",
            })
        } else {
            res.status(400).json({
                success: false,
                msg: "Try again"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `server failed! Try again ${error.message}`
        })
    }
}

const getSavedJob = async (req, res) => {
    try {
        const mongooseResponse = await savedJobCollection.find({userEmail : req.params.email})
        if (mongooseResponse) {
            res.status(200).json({
                success: true,
                savedJob: mongooseResponse
            })
        } else {
            res.status(404).json({
                success: false,
                savedJob: mongooseResponse
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `server failed! Try again ${error.message}`
        })
    }
}

const removeSavedJob = async (req, res) => { 
const mongooseResponse =     await savedJobCollection.deleteMany({_id : req.params.id});
res.send(mongooseResponse)
}


module.exports = {
    createAppliedJob,
    getAppliedJob,
    removeAppliedJob,
    createSavedJob,
    getSavedJob,
    removeSavedJob,
}