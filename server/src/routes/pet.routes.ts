import express from "express";

import {
  createPet,
  getMyPets,
  getPetById,
  updatePet,
  deletePet,
} from "../controllers/pet.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createPet);

router.get("/", protect, getMyPets);

router.get("/:id", protect, getPetById);

router.patch("/:id", protect, updatePet);

router.delete("/:id", protect, deletePet);

export default router;