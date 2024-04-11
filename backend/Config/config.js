const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URL;

async function ConnectDb() {
  try {
    await mongoose.connect(url);
    console.log("mongoDb connected");
  } catch (error) {
    console.log("Error while connecting to db", error);
  }
}

module.exports = ConnectDb;
