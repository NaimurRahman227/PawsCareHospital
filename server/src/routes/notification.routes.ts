import express from "express";

import {
  createNotification,
  getMyNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  getUnreadCount,
} from "../controllers/notification.controller.js";

import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("admin"),
  createNotification
);

router.get(
  "/me",
  protect,
  getMyNotifications
);

router.get(
  "/unread-count",
  protect,
  getUnreadCount
);

router.patch(
  "/mark-all-read",
  protect,
  markAllAsRead
);

router.patch(
  "/:id/read",
  protect,
  markAsRead
);

router.delete(
  "/:id",
  protect,
  deleteNotification
);

export default router;