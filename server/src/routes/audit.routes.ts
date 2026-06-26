import express from "express";

import {
  getAuditLogs,
  getAuditLogsByUser,
  getAuditLogsByEntity,
} from "../controllers/audit.controller.js";

import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  protect,
  authorize("admin"),
  getAuditLogs
);

router.get(
  "/user/:userId",
  protect,
  authorize("admin"),
  getAuditLogsByUser
);

router.get(
  "/entity/:entity",
  protect,
  authorize("admin"),
  getAuditLogsByEntity
);

export default router;