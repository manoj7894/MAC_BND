const { saveNotification, getNotification,deleteNotification } = require("../controller/Notification.controller.js");

const notificationRoutes = require("express").Router();

notificationRoutes.post("/save-notification", saveNotification);
notificationRoutes.get("/get-notification/:email", getNotification);
notificationRoutes.delete("/delete-notification/:email", deleteNotification);

module.exports = {
    notificationRoutes,
}