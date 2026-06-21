import express from "express";

import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";

import { protect , authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, authorize("admin"), createDoctor);

router.get("/", protect, getAllDoctors);

router.get("/:id", protect, getDoctorById);

router.patch("/:id", protect, authorize("admin"), updateDoctor);

router.delete("/:id", protect, authorize("admin"), deleteDoctor);

export default router;