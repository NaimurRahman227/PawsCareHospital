import express from "express";

import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createDoctor);

router.get("/", protect, getAllDoctors);

router.get("/:id", protect, getDoctorById);

router.patch("/:id", protect, updateDoctor);

router.delete("/:id", protect, deleteDoctor);

export default router;