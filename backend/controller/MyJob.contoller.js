const { savedJobCollection, appliedJobCollection } = require("../model/MyJob.model");

const  User = require("../model/users/UserModel");



const createAppliedJob = async (req, res) => { }
const getAppliedJob = async (req, res) => { }
const removeAppliedJob = async (req, res) => { }

const createSavedJob = async (req, res) => { }
const getSavedJob = async (req, res) => { }
const removeSavedJob = async (req, res) => { }


module.exports = {
    createAppliedJob,
    getAppliedJob,
    removeAppliedJob,
    createSavedJob,
    getSavedJob,
    removeSavedJob,
}