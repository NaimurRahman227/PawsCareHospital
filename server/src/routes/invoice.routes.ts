import express from "express";

import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
} from "../controllers/invoice.controller.js";

import { protect , authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("admin"),
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
  authorize("admin"),
  deleteInvoice
);

export default router;