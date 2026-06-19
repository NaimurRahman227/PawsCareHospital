import express from "express";

import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
} from "../controllers/invoice.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  createInvoice
);

router.get(
  "/",
  protect,
  getInvoices
);

router.get(
  "/:id",
  protect,
  getInvoiceById
);

router.patch(
  "/:id",
  protect,
  updateInvoice
);

router.delete(
  "/:id",
  protect,
  deleteInvoice
);

export default router;