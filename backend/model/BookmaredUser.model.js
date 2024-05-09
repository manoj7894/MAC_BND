const mongoose = require('mongoose');

const BookmarkedSchema = new mongoose.Schema(
    {
        employeeEmail: {
            type: String,
            required: true
        },
        email : { type: String, required: true},
        Job_title : { type: String, required: true},
    },
);


const bookmarkedCollection = mongoose.model('BookmarkedUser', BookmarkedSchema);

module.exports = bookmarkedCollection;
