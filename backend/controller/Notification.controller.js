const { notificationCollection } = require("../model/Notification.Model");

const saveNotification = async (req, res) => {
    try {
        const { userEmail, NotificatioNText, updatedAt } = req.body;

        const mongooseResponse = await notificationCollection.create({
            email: userEmail,
            notificationText: NotificatioNText,
            notificationTime: updatedAt,
        });
        res.status(200).json({
            success: true,
        })
    } catch (error) {
        res.status(500).json({ error });
    }
};

const getNotification = async (req, res) => {
    try {
        const { email } = req.params;
        const mongooseResponse = await notificationCollection.find({
            email: email,
        });
        if (mongooseResponse.length > 0) {
            res.status(200).json({
                success: true,
                notification: mongooseResponse,
            });
        } else {
            res.status(200).json({
                success: false,
                notification: mongooseResponse,
            });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};

const deleteNotification = async (req, res) => {
    try {
        const { email } = req.params;
        const mongooseResponse = await notificationCollection.deleteMany({
            email: email,
        });
        if (mongooseResponse.acknowledged) {
            res.status(200).json({
                success: true,
                msg: "All notifications deleted",
            });
        } else {
            res.status(404).json({
                success: false,
                msg: "No notifications found",
            });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = { saveNotification, getNotification, deleteNotification };
