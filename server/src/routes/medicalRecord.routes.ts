import express from "express";

import {
  createMedicalRecord,
  getMedicalRecords,
  getPetMedicalHistory,
  updateMedicalRecord,
  deleteMedicalRecord,
} from "../controllers/medicalRecord.controller.js";

import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("doctor"),
  createMedicalRecord
);

router.get(
  "/",
  protect,
  authorize(
    "admin",
    "doctor",
    "receptionist"
  ),
  getMedicalRecords
);

router.get(
  "/pet/:petId",
  protect,
  getPetMedicalHistory
);

router.patch(
  "/:id",
  protect,
  authorize(
    "doctor",
    "admin"
  ),
  updateMedicalRecord
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteMedicalRecord
);

export default router;