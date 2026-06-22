import express from "express";

import {
  createVaccination,
  getVaccinations,
  getPetVaccinations,
  getUpcomingVaccinations,
  updateVaccination,
  deleteVaccination,
} from "../controllers/vaccination.controller.js";

import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("doctor"),
  createVaccination
);

router.get(
  "/",
  protect,
  getVaccinations
);

router.get(
  "/pet/:petId",
  protect,
  getPetVaccinations
);

router.get(
  "/upcoming",
  protect,
  getUpcomingVaccinations
);

router.patch(
  "/:id",
  protect,
  authorize(
    "doctor",
    "admin"
  ),
  updateVaccination
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteVaccination
);

export default router;