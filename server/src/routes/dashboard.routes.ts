import express from "express";

import {
  getAdminDashboard,
  getDoctorDashboard,
  getOwnerDashboard,
  getReceptionistDashboard,
} from "../controllers/dashboard.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/admin",
  protect,
  authorize("admin"),
  getAdminDashboard
);

router.get(
  "/doctor",
  protect,
  authorize("doctor"),
  getDoctorDashboard
);

router.get(
  "/owner",
  protect,
  authorize("owner"),
  getOwnerDashboard
);

router.get(
  "/receptionist",
  protect,
  authorize("receptionist"),
  getReceptionistDashboard
);

export default router;