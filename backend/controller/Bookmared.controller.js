const bookmarkedCollection = require("../model/BookmaredUser.model")



const createBookmark = async (req, res) => {
    const { HrEmail } = req.params;
    const { email, profileImage, job_title, biography, country, employmentType, jobDescription, jobTitle, skils, resume, location } = req.body;
    try {

        // Matching the current HR-Email and User-Email with 
const mongooseResponse = await mongoose.create({

})
    } catch (error) {
        res.status(500).send(`Internal server Error : ${error.message}`)
    }

}

const getBookmark = async (req, res) => {
    const { HrEmail } = req.params;

    try {
        const mongooseResponse = await bookmarkedCollection.find({ employeeEmail: HrEmail });

        if (mongooseResponse.length > 0) {
            res.status(200).json({
                success: true,
                bookmarkedUser: mongooseResponse
            })
        } else {
            res.status(404).json({
                success: false,
                bookmarkedUser: mongooseResponse
            })
        }
    } catch (error) {
        res.status(500).send(`Internal server Error : ${error.message}`)
    }
}

const removeBookmark = async (req, res) => {

    const { HrEmail } = req.params;

    try {

    } catch (error) {
        res.status(500).send(`Internal server Error : ${error.message}`)
    }
}


module.exports = {
    createBookmark,
    getBookmark,
    removeBookmark,
}
