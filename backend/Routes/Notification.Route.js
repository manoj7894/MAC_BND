const { saveNotification, getNotification } = require("../controller/Notification.controller.js");

const notificationRoutes = require("express").Router();

notificationRoutes.post("/create-notification", saveNotification);
notificationRoutes.get("/create-notification/:email", getNotification);

module.exports = {
    notificationRoutes,
}