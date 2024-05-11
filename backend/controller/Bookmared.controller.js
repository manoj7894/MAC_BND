const bookmarkedCollection = require("../model/BookmaredUser.model");
const HrUser = require("../model/users/HrUserModel");



const createBookmark = async (req, res) => {
    const { HrEmail } = req.params;
    const { email, profileImage, name, jobTitle
        , biography, country, job_title, employmentType, jobDescription, skills, resume, location } = req.body;

    try {

        // Matching the current HR - Email and User - Email with 
        const mongooseResponse = await bookmarkedCollection.create({
            employeeEmail: HrEmail,
            email: email,
            Job_title: jobTitle,
            profileImage,
            name: name,
            biography: biography,
            country: country,
            employmentType: employmentType,
            jobDescription: jobDescription,
            skills: skills,
            resume: resume[0],
            location: location
        });

        // Update the hr user collection based on the BOOKMARKED USER
        await HrUser.updateOne({ email: HrEmail }, {
            $push: {
                bookmarkUser: {
                    email: email,
                    Job_title: jobTitle,
                }
            },
        });
        if (mongooseResponse) {
            return res.status(200).json({
                success: true,
                msg: "User added to bookmarked collection"
            })

        } else {
            return res.status(200).json({
                success: false,
                msg: "Something went wrong, Try again later"
            })
        }

    } catch (error) {
        console.log(error)
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
