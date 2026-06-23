import { Request, Response } from "express";
import { Notification } from "../models/notification.js";
import { AuthRequest } from "../middleware/auth.middleware.js";

export const createNotification = async (
  req: Request,
  res: Response
) => {
  try {
    const notification =
      await Notification.create(req.body);

    res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to create notification",
    });
  }
};

export const getMyNotifications =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const notifications =
        await Notification.find({
          recipient:
            req.user?.userId,
        }).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        count:
          notifications.length,
        data: notifications,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch notifications",
      });
    }
  };

  export const markAsRead = async (
  req: Request,
  res: Response
) => {
  try {
    const notification =
      await Notification.findByIdAndUpdate(
        req.params.id,
        {
          isRead: true,
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to update notification",
    });
  }
};

export const markAllAsRead =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      await Notification.updateMany(
        {
          recipient:
            req.user?.userId,
          isRead: false,
        },
        {
          isRead: true,
        }
      );

      res.status(200).json({
        success: true,
        message:
          "All notifications marked as read",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to update notifications",
      });
    }
  };

  export const deleteNotification =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      await Notification.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Notification deleted",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to delete notification",
      });
    }
  };

  export const getUnreadCount =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const count =
        await Notification.countDocuments(
          {
            recipient:
              req.user?.userId,
            isRead: false,
          }
        );

      res.status(200).json({
        success: true,
        unreadCount: count,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch unread count",
      });
    }
  };