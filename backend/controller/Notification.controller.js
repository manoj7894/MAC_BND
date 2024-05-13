const { notificationCollection } = require("../model/Notification.Model");

const saveNotification = async (req, res) => {
    try {
        const { } = req.body;
        console.log(req.body)

    } catch (error) {
        res.status(500).json({ error });
    }
}

const getNotification = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = { saveNotification, getNotification }