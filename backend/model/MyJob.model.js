const mongoose = require('mongoose');

const myJobSchema = new mongoose.Schema(
    {
        jobID: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
            required: true,
        },
    }
);
const appliedJobCollection = mongoose.model('appliedJob', myJobSchema);
const savedJobCollection = mongoose.model('savedJob', myJobSchema);

module.exports = {appliedJobCollection, savedJobCollection};
