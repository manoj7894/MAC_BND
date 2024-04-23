const mongoose = require("mongoose");

const hrSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  experience:{
    type:String
  },
  userType: {
    type: String,
  },
  course: {
    type: String,
    required: true,
  },
  gender:{
    type:String
  },
  website:{
    type:String
  },
  marital_status:{
    type:String
  },
 
  profileImage: {
    filename: String,
    path: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  biography: {
    type: String,
  },
});

const HrUser = mongoose.model("HrUser", hrSchema);

module.exports = HrUser;
