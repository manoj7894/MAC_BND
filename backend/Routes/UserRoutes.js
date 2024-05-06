const userRoutes = require("express").Router();
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  getUser,
  updateUserField,
  logout
} = require("../controller/auth/AuthController");
const { upload, uploadProfile } = require("../middleware/fileUploadMiddleware");
const {
  getHalfHourlyLoginFrequency,
  getWeeklyLoginFrequency,
  getMonthlyLoginFrequency,
  getYearlyLoginFrequency,
  getHalfHourlyTimeSpent,
  getWeeklyTimeSpent,
  getMonthlyTimeSpent,
  getYearlyTimeSpent
} = require("../controller/UserAnalytics/userAnalyticsController");

userRoutes.get("/user", getUser);
userRoutes.post("/signup", upload, signUp);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
userRoutes.get("/analytics/login-frequency/half-hourly", getHalfHourlyLoginFrequency);
userRoutes.get("/analytics/login-frequency/weekly", getWeeklyLoginFrequency);
userRoutes.get("/analytics/login-frequency/monthly", getMonthlyLoginFrequency);
userRoutes.get("/analytics/login-frequency/yearly", getYearlyLoginFrequency);
userRoutes.get("/analytics/time-spent/half-hourly", getHalfHourlyTimeSpent);
userRoutes.get("/analytics/time-spent/weekly", getWeeklyTimeSpent);
userRoutes.get("/analytics/time-spent/monthly", getMonthlyTimeSpent);
userRoutes.get("/analytics/time-spent/yearly", getYearlyTimeSpent);
userRoutes.post("/forgot-password", forgotPassword);
userRoutes.post("/reset-password/:token", resetPassword);
userRoutes.patch("/update-user/:email", uploadProfile, updateUserField);

module.exports = userRoutes;
