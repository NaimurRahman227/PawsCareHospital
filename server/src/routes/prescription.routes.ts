import express from "express";

import {
  createPrescription,
  getPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
} from "../controllers/prescription.controller.js";

import { protect , authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("doctor"),
  createPrescription
);

router.get(
  "/",
  protect,
  getPrescriptions
);

router.get(
  "/:id",
  protect,
  getPrescriptionById
);

router.patch(
  "/:id",
  protect,
  authorize("doctor"),
  updatePrescription
);

router.delete(
  "/:id",
  protect,
  deletePrescription
);

export default router;