import express from "express";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointment.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  createAppointment
);

router.get(
  "/",
  protect,
  getAppointments
);

router.get(
  "/:id",
  protect,
  getAppointmentById
);

router.patch(
  "/:id",
  protect,
  updateAppointment
);

router.delete(
  "/:id",
  protect,
  deleteAppointment
);

export default router;