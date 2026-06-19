import express from "express";

import {
  createPrescription,
  getPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
} from "../controllers/prescription.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
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
  updatePrescription
);

router.delete(
  "/:id",
  protect,
  deletePrescription
);

export default router;